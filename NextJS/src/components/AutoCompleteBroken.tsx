'use client';

import { SailData } from "@/common/getSailData";
import { SearchResult } from "@/common/createSearchTasks";
import filterResultsRandom from "@/common/filterResultsRandom";
import SailboatResults from "@/common/components/SailboatResults";
import SailboatPreview from "@/common/components/SailboatPreview";



export default function AutoCompleteBroken({ searchTerm, sailData }: { searchTerm: string, sailData: SailData }) {
	const results = filterResultsRandom(sailData.data, searchTerm);
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