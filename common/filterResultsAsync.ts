import { SearchTask, SearchResult } from "./createSearchTasks";
import { yieldToMain } from "./delay";

export default async function filterResultsAsync(searchers: SearchTask[], searchTerm: string, signal: AbortSignal) {
	const ret: SearchResult[] = [];

	if (searchTerm == "")
		return ret;

	const start = performance.now();

	for (let searcher of searchers) {
		await yieldToMain();
		if (signal?.aborted) {
			performance.measure('Aborted: filterResults for: ' + searchTerm, { start });
			return [];
		}

		const results = searcher(searchTerm);
		ret.push(...results);
	}
	
	performance.measure('Computed: filterResults for: ' + searchTerm, { start });
	return ret.sort((a,b) => a!.score! - b!.score!);
}