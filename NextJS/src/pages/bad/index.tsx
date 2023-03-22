'use client';
import { ChangeEvent, use, useMemo, useState } from "react";

import getSailData from "@/common/getSailData";
import SearchBar from "@/common/components/SearchBar";
import AutoCompleteSync from "@/components/AutoCompleteSync";

function ReactSearchBad() {
	const sailData = use(useMemo(() => getSailData(), []));
	const [searchTerm, setSearchTerm] = useState("");

	const onInput = (e: ChangeEvent<HTMLInputElement>) => {
		const searchTerm = e.target.value;
		setSearchTerm(searchTerm);
	};

	return (
		<main>
			<SearchBar searchTerm={searchTerm} onInput={onInput}></SearchBar>
			<AutoCompleteSync searchTerm={searchTerm} sailData={sailData!}></AutoCompleteSync>
		</main>
	);
}

import dynamic from "next/dynamic";
const Page = dynamic(async () => ReactSearchBad, { ssr: false });
export default Page;