import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Brittany Chiang - Front End Engineer",
	description: "Brittany Chiang is a front-end engineer who builds accessible, pixel-perfect digital experiences for the web.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable}`}
		>
			<head>
				<Script
					crossOrigin="anonymous"
					src="//unpkg.com/same-runtime/dist/index.global.js"
				/>
			</head>
			<body suppressHydrationWarning>
				<ClientBody>{children}</ClientBody>
			</body>
		</html>
	);
}
