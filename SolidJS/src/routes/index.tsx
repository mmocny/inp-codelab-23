import { A } from "solid-start";

export default function IndexPage() {
	return (
	  <main>
		  <ul>
			  <li><A href="./bad">Bad: Synchronous and unresponsive.</A></li>
			  <li><A href="./better">Better: Transition, Delayed+Debounced.</A></li>
			  <li><A href="./best">Best: Asynchronous, yieldy, and abortable.</A></li>
		  </ul>
	  </main>
	)
  }