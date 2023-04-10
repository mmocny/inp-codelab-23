function A({ href, children }: { href: string, children: any }) {
	return <a href={href}>{ children }</a>
}

export default function IndexPage() {
  return (
	<main>
		<ul>
			<li><A href="./0_random">Starter: search doesnt work right...</A></li>
			<li><A href="./1_bad">Bad: Synchronous and unresponsive.</A></li>
			<li><A href="./2_better">Better: Transition, Delayed+Debounced.</A></li>
			<li><A href="./3_best">Best: Asynchronous, yieldy, and abortable.</A></li>
		</ul>
	</main>
  )
}