"use client";

import { v4 as getUuid } from "uuid";
import { NameDropdown } from "./NameDropdown";
import { useNamesContext } from "../controllers/NamesContext";
import { useCallback } from "react";

export const NamesForm = () => {
	const { names, addName } = useNamesContext();

	const createNewNameInput = useCallback(() => {
		// Create another dropdown
		addName({ id: getUuid(), name: "" });
	}, [addName]);

	const renderNamesInputs = useCallback(() => {
		// Map over context and create an input for each
		return names.map((namesObject) => (
			<NameDropdown
				key={namesObject.id}
				id={namesObject.id}
				name={namesObject.name}
				createNewNameAction={createNewNameInput}
			/>
		));
	}, [createNewNameInput, names]);

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
			<h2 className="text-xl font-bold mb-4">Add Names</h2>
			<form
				className="space-y-4"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				{renderNamesInputs()}
			</form>
			<div className="flex justify-center mt-4">
				<button
					className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
					onClick={createNewNameInput}
				>
					Add another name
				</button>
			</div>
		</div>
	);
};
