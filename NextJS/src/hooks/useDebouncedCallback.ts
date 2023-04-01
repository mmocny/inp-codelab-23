import debounce from "@/common/debounce";
import { DependencyList, useMemo } from "react";

export default function useDebouncedCallback(fn: Function, ms: number, deps: DependencyList) {
	return useMemo(() => debounce(fn, ms), deps); // eslint-disable-line react-hooks/exhaustive-deps
}

