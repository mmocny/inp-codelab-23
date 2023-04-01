import { SailBoat } from "./getSailData";

function pickAtRandom<T>(data: T[]): T {
	return data[Math.floor(data.length * Math.random())];
}

export default function filterResultsRandom(data: SailBoat[], searchTerm: string) {
	if (searchTerm === "") return [];
	const someRandomPicks = Array.from({ length: 10 }, () => pickAtRandom(data));
	return someRandomPicks.map(item => ({ item, score: 0 }));
}