"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface NameForm {
	name: string;
	id: string;
}

interface NamesContext {
	names: NameForm[];
	addName: (nameObject: NameForm) => void;
	removeName: (id: string) => void;
	changeName: (nameObject: NameForm) => void;
}

const defaultValue: NamesContext = {
	names: [
		{ id: "1", name: "stella" },
		{ id: "2", name: "corinne" },
	],
	addName: () => {},
	removeName: () => {},
	changeName: () => {},
};

const NamesContext = createContext<NamesContext>(defaultValue);

export const NamesProvider = ({ children }: { children: ReactNode }) => {
	const [names, setNames] = useState(defaultValue.names);

	const addName = (nameObject: NameForm) =>
		setNames((prev) => prev.concat(nameObject));

	const removeName = (id: string) =>
		setNames((prev) => prev.filter((name) => name?.id !== id));

	const changeName = (nameObject: NameForm) =>
		setNames((prev) =>
			prev.map((oldNameObject) => {
				return nameObject.id === oldNameObject.id ? nameObject : oldNameObject;
			})
		);

	return (
		<NamesContext.Provider value={{ names, addName, removeName, changeName }}>
			{children}
		</NamesContext.Provider>
	);
};

export const useNamesContext = () => {
	const context = useContext(NamesContext);
	if (!context) {
		throw new Error("useNamesContext must be used within a NamesProvider");
	}
	return context;
};
