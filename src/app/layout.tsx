import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/features/Navbar";
import { CourseTitle } from "./courses/ui/CourseTitle";
import Footer from "@/features/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Course Force",
	description: "Course to force the course of forcing",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`bg-white text-black dark:bg-black dark:text-white ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="min-h-screen flex flex-col">
					<header className="bg-blue-500 text-white p-4">
						<h1 className="text-xl">Course Force</h1>
						<Navbar />
					</header>

					<main className="flex-grow container mx-auto p-4">
						<div className="grid grid-cols-3 gap-4">
							<div className="bg-gray-100 p-4 rounded shadow">
								<CourseTitle />
							</div>
							<div className="col-span-2 bg-white p-4 rounded shadow">
								{children}
							</div>
						</div>
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
