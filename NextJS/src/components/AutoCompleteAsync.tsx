'use client';

import Fuse from "fuse.js";
import { cache, use, useMemo } from "react";
import { SailData } from "@/common/getSailData";
import createSearchTasks, { SearchResult } from "@/common/createSearchTasks";
import filterResultsAsync from "@/common/filterResultsAsync";
import SailboatResults from "@/common/components/SailboatResults";
import SailboatPreview from "@/common/components/SailboatPreview";

// Cache doesn't support a compare function for arguments, so we will recompute even when only AbortSignal changes
const cachedFilterResultsAsync = cache(filterResultsAsync)

export default function AutoCompleteAsync({ searchTerm, sailData, abortSignal }: { searchTerm: string, sailData: SailData, abortSignal: AbortSignal }) {
	// This can be expensive!
	const searchers = useMemo(() => createSearchTasks(Fuse, sailData), [sailData]);
	const results = use(cachedFilterResultsAsync(searchers, searchTerm, abortSignal));
	const slicedResults = results.slice(0, 10);

	if (results.length == 0) {
		return <></>;
	}

	return (
		<>
			<SailboatResults results={results}></SailboatResults>
			{ slicedResults.map((result: SearchResult) =>
				<SailboatPreview key={result.item.id} result={result}></SailboatPreview>
			)}
		</>
	);
};