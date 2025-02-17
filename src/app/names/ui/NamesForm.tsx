"use client";

import { v4 as getUuid } from "uuid";
import { NameDropdown } from "./NameDropdown";
import { useNamesContext } from "../controllers/NamesContext";
import { useCallback } from "react";

export const NamesForm = () => {
	const { names, addName } = useNamesContext();

	const onClick = useCallback(() => {
		// Create another dropdown
		console.log("** generating uuid ", getUuid());
		addName({ id: getUuid(), name: "" });
	}, [addName]);

	const renderNamesInputs = useCallback(() => {
		// Map over context and create an input for each
		return names.map((namesObject) => (
			<NameDropdown
				key={namesObject.id}
				id={namesObject.id}
				name={namesObject.name}
			/>
		));
	}, [names]);

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
			<h2 className="text-xl font-bold mb-4">Add Names</h2>
			<form className="space-y-4">{renderNamesInputs()}</form>
			<button className="space-y-4" onClick={onClick}>
				Add another name
			</button>
		</div>
	);
};
