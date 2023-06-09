'use client';
import { ChangeEvent, use, useMemo, useState } from "react";

import getSailData from "@/common/getSailData";
import SearchBar from "@/common/components/SearchBar";
import AutoCompleteRandom from "@/components/AutoCompleteBroken";

function ReactSearchRandom() {
	const sailData = use(useMemo(() => getSailData(), []));
	const [searchTerm, setSearchTerm] = useState("");

	const onInput = (e: ChangeEvent<HTMLInputElement>) => {
		const searchTerm = e.target.value;
		setSearchTerm(searchTerm);
	};

	return (
		<main>
			<SearchBar searchTerm={searchTerm} onInput={onInput}></SearchBar>
			<AutoCompleteRandom searchTerm={searchTerm} sailData={sailData!}></AutoCompleteRandom>
		</main>
	);
}

import dynamic from "next/dynamic";
const Page = dynamic(async () => ReactSearchRandom, { ssr: false });
export default Page;