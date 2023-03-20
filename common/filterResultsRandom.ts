import { SearchResult, SearchTask } from "./createSearchTasks";

export default function filterResults(searchers: SearchTask[], searchTerm: string) {
	const ret: SearchResult[] = [];

	if (searchTerm == "")
		return ret;

	for (let searcher of searchers) {
		const results = searcher(searchTerm);
		ret.push(...results);
	}

	return ret.sort((a,b) => a!.score! - b!.score!);
}