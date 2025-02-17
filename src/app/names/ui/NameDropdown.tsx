"use client";

import React from "react";
import { useNamesContext } from "../controllers/NamesContext";

export const NameDropdown = ({
	name,
	id,
	createNewNameAction,
}: {
	name: string;
	id: string;
	createNewNameAction: () => void;
}) => {
	const { changeName } = useNamesContext();

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		changeName({ name: event.target.value, id });
	};

	return (
		<>
			<label className="block text-sm font-medium text-gray-700">Name:</label>
			<input
				className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				value={name}
				onChange={onChange}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						e.preventDefault();
						createNewNameAction();
					}
				}}
			/>
		</>
	);
};
