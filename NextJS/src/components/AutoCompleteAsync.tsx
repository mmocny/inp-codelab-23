'use client';

import Fuse from "fuse.js";
import { cache, use } from "react";
import { SailData } from "@/common/getSailData";
import createSearchTasks, { SearchResult } from "@/common/createSearchTasks";
import filterResultsAsync from "@/common/filterResultsAsync";
import SailboatResults from "@/common/components/SailboatResults";
import SailboatPreview from "@/common/components/SailboatPreview";

export default function AutoCompleteAsync({ searchTerm, sailData, abortSignal }: { searchTerm: string, sailData: SailData, abortSignal: AbortSignal }) {
	const searchers = cache(createSearchTasks)(Fuse, sailData);
	const results = use(cache(filterResultsAsync)(searchers, searchTerm, abortSignal));
	const slicedResults = results.slice(0, 10);

	return (
		results.length == 0 ? <></> : <>
			<SailboatResults results={results}></SailboatResults>
			{ slicedResults.map((result: SearchResult) =>
				<SailboatPreview key={result.item.id} result={result}></SailboatPreview>
			)}
		</>
	);
};