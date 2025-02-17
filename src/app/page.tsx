import Image from "next/image";

import { NamesProvider } from "./names/controllers/NamesContext";
import { BracketNames } from "./names/ui/BracketNames";
import { NamesForm } from "./names/ui/NamesForm";

export default function Home() {
	return (
		<NamesProvider>
			<div className="grid grid-cols-3 gap-4 flex-grow">
				<div className="bg-gray-100 p-4 rounded shadow">
					<NamesForm />
				</div>
				<div className="col-span-2 bg-white p-4 rounded shadow">
					<div className="flex flex-col items-center p-10">
						<Image
							src="/logo.png"
							alt="Baby Madness Logo"
							width={180}
							height={180}
							className="mb-4"
						/>
						<h1 className="text-3xl font-bold mb-4">Baby Madness Bracket</h1>
						<BracketNames />
					</div>
				</div>
			</div>
		</NamesProvider>
	);
}
