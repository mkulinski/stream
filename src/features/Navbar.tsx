import Link from "next/link";

const Navbar = () => {
	return (
		<ul>
			<li>
				<Link href="/">Home</Link>
			</li>
			<li>
				<Link href="/courses/1/1">Go to course 1</Link>
			</li>
		</ul>
	);
};

export default Navbar;
