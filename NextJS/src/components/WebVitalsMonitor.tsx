'use client';

import measureInteractions from "../common/inp.js"
import measureLoAF from "../common/LoAF.js";

import { useEffect } from "react";

// This could be a hook, but its a component in case we ever inject UI.
export default function WebVitalsMonitor() {
	// TODO: Replace this (read the "do you need an effect" docs again :)
	useEffect(() => {
		const observers = [
			measureInteractions(),
			measureLoAF(),
		];
		return () => observers.forEach(observer => observer?.disconnect());
	}, []);

	return <></>;
}