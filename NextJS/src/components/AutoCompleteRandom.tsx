'use client';

import { SailBoat, SailData } from "@/common/getSailData";
import { SearchResult } from "@/common/createSearchTasks";
import SailboatResults from "@/common/components/SailboatResults";
import SailboatPreview from "@/common/components/SailboatPreview";

function filterByLength(data: SailBoat[], searchTerm: string) {
	return data.filter(item => {
		const name = item.name;
		if (name[0].toLocaleLowerCase() != searchTerm[0]?.toLocaleLowerCase())
			return false;
		if (searchTerm.length > 3 && name.length != searchTerm.length)
			return false;
		return true;
	}).map(item => ({ item, score: 0 }));
}

export default function AutoComplete({ searchTerm, sailData }: { searchTerm: string, sailData: SailData }) {
	const results = filterByLength(sailData.data, searchTerm);
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