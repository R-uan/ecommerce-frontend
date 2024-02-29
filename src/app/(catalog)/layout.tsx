import type { Metadata } from "next";
import Header from "../components/Header/Header";
import "../globals.css";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Footer from "../components/Footer";

export const metadata: Metadata = {
	title: "Catalog",
	description: "",
};

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
	return (
		<body className="flex relative overflow-x-hidden items-center flex-col bg-[#050A0E] min-h-[90vh]">
			<Header />
			{children}
			<Footer />
		</body>
	);
}
