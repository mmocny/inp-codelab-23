'use client';
import { ChangeEvent, Suspense, startTransition, use, useCallback, useMemo, useState } from "react";

import getSailData from "@/common/getSailData";
import SearchBar from "@/common/components/SearchBar";
import AutoCompleteSync from "@/components/AutoCompleteSync";
import useDebouncedEffect from "@/hooks/useDebouncedEffect";


function ReactSearchBetter() {
	const sailData = use(useMemo(() => getSailData(), []));
	const [searchTerm, setSearchTerm] = useState("");
	const [autoCompleteTerm, setAutoCompleteTerm] = useState(searchTerm);
	const isPending = searchTerm != autoCompleteTerm;

	useDebouncedEffect(() => {
		startTransition(() => {
			setAutoCompleteTerm(searchTerm);
		});
	}, 1000, [searchTerm]);

	const onInput = (e: ChangeEvent<HTMLInputElement>) => {
		const searchTerm = e.target.value;
		setSearchTerm(searchTerm);
	};

	return (
		<main className={isPending ? "blurred" : ""}>
			<SearchBar searchTerm={searchTerm} onInput={onInput}></SearchBar>
			<Suspense>
				<AutoCompleteSync searchTerm={autoCompleteTerm} sailData={sailData!}></AutoCompleteSync>
			</Suspense>
		</main>
	);
}

import dynamic from "next/dynamic";
const Page = dynamic(async () => ReactSearchBetter, { ssr: false });
export default Page;