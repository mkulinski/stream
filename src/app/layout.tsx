import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/features/Navbar";
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
	title: "Baby Name Battle",
	description: "Babies be battlin",
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
					<header className="bg-blue-500 text-white pl-4 flex flex-row justify-between items-center">
						<h1 className="text-xl pl-4">Baby Name Battle</h1>
						<Navbar />
					</header>
					<main className="flex-grow flex flex-col h-full min-h-screen">
						{children}
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
