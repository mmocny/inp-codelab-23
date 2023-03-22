'use client';
import { ChangeEvent, use, useMemo, useState } from "react";

import getSailData from "@/common/getSailData";
import SearchBar from "@/common/components/SearchBar";
import AutoCompleteRandom from "@/components/AutoCompleteBroken";
import dynamic from "next/dynamic";

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

const Page = dynamic(async () => ReactSearchRandom, { ssr: false });
export default Page;