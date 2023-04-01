'use client';

import Fuse from "fuse.js";
import { cache } from "react";
import { SailData } from "@/common/getSailData";
import createSearchTasks, { SearchResult, SearchTask } from "@/common/createSearchTasks";
import filterResultsSync from "@/common/filterResultsSync";
import SailboatResults from "@/common/components/SailboatResults";
import SailboatPreview from "@/common/components/SailboatPreview";

export default function AutoComplete({ searchTerm, sailData }: { searchTerm: string, sailData: SailData }) {
	const searchers = cache(createSearchTasks)(Fuse, sailData);
	const results = cache(filterResultsSync)(searchers, searchTerm);
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