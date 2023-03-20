export default function SearchBar({ searchTerm, onInput: onInput }: { searchTerm: string, onInput: (e: any) => void }) {
	return (
		<form className="rounded" onSubmit={(e) => e.preventDefault()} action="#">
			<input className="searchbox shadow text-xl font-medium text-gray-900 dark:text-white" onInput={onInput} value={searchTerm} type="text" placeholder="Search"></input>
		</form>
	);
}