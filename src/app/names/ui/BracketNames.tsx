"use client";

import { useEffect, useMemo, useState } from "react";
import { NameForm, useNamesContext } from "../controllers/NamesContext";

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
	const totalRounds = Math.log2(
		Math.pow(2, Math.ceil(Math.log2(names.length)))
	);

	const [rounds, setRounds] = useState<string[][]>([newNamesArray]);
	const [champion, setChampion] = useState<string | null>(null);

	useEffect(() => {
		setRounds([newNamesArray]);
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

		if (newRounds.length - 1 === totalRounds) {
			setChampion(newRounds[roundIndex + 1][0]);
		}
	};

	if (names.length < 2 || names.length > 20) {
		return <p className="text-red-500">Please provide more than two names.</p>;
	}

	return (
		<div className="flex flex-col items-center justify-center p-4">
			{champion && rounds.length - 1 === totalRounds ? (
				<div className="flex items-center justify-center w-full h-screen bg-green-500 text-white text-5xl font-bold animate-bounce">
					Champion: {champion} 🏆
				</div>
			) : (
				<div className="grid grid-cols-4 gap-16 w-full max-w-6xl">
					{rounds.map((round, roundIndex) => (
						<div
							key={roundIndex}
							className={`flex flex-col items-center space-y-12 relative ${
								roundIndex > 0 ? "justify-center" : ""
							}`}
						>
							{round.map((player, matchIndex) => (
								<div
									key={matchIndex}
									className="relative flex flex-col items-center"
								>
									{matchIndex % 2 === 0 && (
										<div className="relative flex flex-col items-center">
											<div
												className={`border-2 border-black p-4 w-48 text-center rounded-lg cursor-pointer bg-blue-600 text-white hover:bg-blue-800 transition-transform transform hover:scale-105 relative after:absolute after:h-12 after:w-8 after:border-t-2 after:border-r-2 after:border-black after:-right-8 after:top-1/2 after:-translate-y-1/2`}
												onClick={() =>
													player !== "BYE" &&
													handleWinnerClick(
														player,
														roundIndex,
														Math.floor(matchIndex / 2)
													)
												}
											>
												{round[matchIndex]}
											</div>
											<div
												className={`border-2 border-black p-4 w-48 text-center rounded-lg cursor-pointer bg-blue-600 text-white hover:bg-blue-800 transition-transform transform hover:scale-105 relative before:absolute before:h-12 before:w-8 before:border-b-2 before:border-r-2 before:border-black before:-right-8 before:top-1/2 before:-translate-y-1/2`}
												onClick={() =>
													round[matchIndex + 1] !== "BYE" &&
													handleWinnerClick(
														round[matchIndex + 1],
														roundIndex,
														Math.floor(matchIndex / 2)
													)
												}
											>
												{round[matchIndex + 1]}
											</div>
										</div>
									)}
								</div>
							))}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
