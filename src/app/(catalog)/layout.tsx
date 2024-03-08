import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import "../globals.css";

export const metadata: Metadata = {
	title: "Gemini - Catalog",
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
