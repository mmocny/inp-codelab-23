// This is a very trivial version of this hook.
// There are several libraries that provide more robust versions.
export default function debounce(fn: Function, ms: number) {
	let timeoutId: ReturnType<typeof setTimeout>;
	return (...args: any[]) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn(...args), ms);
	};
}