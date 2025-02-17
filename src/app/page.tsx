import { NamesProvider } from "./names/controllers/NamesContext";
import { BracketNames } from "./names/ui/BracketNames";
import { NamesForm } from "./names/ui/NamesForm";

export default function Home() {
	return (
		<NamesProvider>
			<div className="grid grid-cols-3 gap-4">
				<div className="bg-gray-100 p-4 rounded shadow">
					<NamesForm />
				</div>
				<div className="col-span-2 bg-white p-4 rounded shadow">
					<h1>BRACKET INC</h1>
					<div>
						<BracketNames />
					</div>
				</div>
			</div>
		</NamesProvider>
	);
}
