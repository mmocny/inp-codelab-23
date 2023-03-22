import { SailBoat } from "./getSailData";

function pickAtRandom<T>(data: T[]): T {
	return data[Math.floor(data.length * Math.random())];
}

export default function filterResultsRandom(data: SailBoat[], searchTerm: string) {
	const sameLetter = data.filter(item => {
		const name = item.name;
		if (name[0].toLocaleLowerCase() != searchTerm[0]?.toLocaleLowerCase())
			return false;
		return true;
	});

	const targetCount = Math.floor(sameLetter.length / searchTerm.length);
	const someRandomPicks = Array.from({ length: targetCount }, () => pickAtRandom(sameLetter));
	return someRandomPicks.map(item => ({ item, score: 0 }));
}