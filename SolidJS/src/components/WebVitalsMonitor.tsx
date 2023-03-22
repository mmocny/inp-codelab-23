import { createEffect, onCleanup } from "solid-js";
import measureInteractions from "~/common/inp";
import measureLoAF from "~/common/LoAF";

export default function WebVitalsMonitor() {
	createEffect(() => {
		// console.log('Recording Interaction to Next Paint (INP).');

		const observers = [
			measureInteractions(),
			measureLoAF(),
		];
		onCleanup(() => observers.forEach(observer => observer?.disconnect()));
	});

	return <></>;
}