import Link from "next/link";

const Navbar = () => {
	return (
		<ul className="flex flex-row items-start pl-4">
			<li className="p-4">
				<Link href="/">Home</Link>
			</li>
			{/* <li className="p-4">
				<Link href="/courses/1/1">Go to course 1</Link>
			</li> */}
		</ul>
	);
};

export default Navbar;
