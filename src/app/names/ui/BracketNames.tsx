"use client";

import { useEffect, useMemo, useState } from "react";
import { NameForm, useNamesContext } from "../controllers/NamesContext";

// export const BracketNames = () => {
// 	const { names } = useNamesContext();

// 	const renderNamesInputs = useCallback(() => {
// 		// Map over context and create an input for each
// 		return names.map((namesObject) => (
// 			<div key={namesObject.id}>{namesObject.name}</div>
// 		));
// 	}, [names]);

// 	return <>{renderNamesInputs()}</>;
// };

const generateInitialBracket = (namesForm: NameForm[]) => {
	const players = namesForm.map((namesObject) => {
		return namesObject.name;
	});
	const numPlayers = Math.pow(2, Math.ceil(Math.log2(players.length))); // Make it a power of 2
	const filledPlayers = [
		...players,
		...Array(numPlayers - players.length).fill("BYE"),
	]; // Fill with BYE
	return filledPlayers;
};

export const BracketNames = () => {
	const { names } = useNamesContext();

	const newNamesArray = useMemo(() => generateInitialBracket(names), [names]);

	const [rounds, setRounds] = useState<string[][]>([newNamesArray]);

	useEffect(() => {
		setRounds([newNamesArray]);
		console.log("*** firing ");
	}, [newNamesArray]);

	const handleWinnerClick = (
		winner: string,
		roundIndex: number,
		matchIndex: number
	) => {
		const newRounds = [...rounds];
		if (!newRounds[roundIndex + 1]) newRounds[roundIndex + 1] = [];

		newRounds[roundIndex + 1][matchIndex] = winner;
		setRounds(newRounds);
	};

	if (names.length < 2 || names.length > 20) {
		return <p className="text-red-500">Please provide more than two names.</p>;
	}

	return (
		<div className="flex justify-center p-4">
			<div className="grid grid-cols-4 gap-4 w-full max-w-4xl">
				{rounds.map((round, roundIndex) => (
					<div
						key={roundIndex}
						className="flex flex-col items-center space-y-4"
					>
						{round?.map?.((player, matchIndex) => (
							<div
								key={matchIndex}
								className={`border p-4 w-40 text-center rounded-lg cursor-pointer
                ${
									player !== "BYE"
										? "bg-blue-500 text-white hover:bg-blue-700"
										: "bg-gray-300 cursor-default"
								}`}
								onClick={() =>
									player !== "BYE" &&
									handleWinnerClick(
										player,
										roundIndex,
										Math.floor(matchIndex / 2)
									)
								}
							>
								{player}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};
