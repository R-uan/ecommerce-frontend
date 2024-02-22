import type { Metadata } from "next";
import Header from "../components/Header/Header";
import "../globals.css";

export const metadata: Metadata = {
	title: "Catalog",
	description: "",
};

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
	return (
		<body className="flex overflow-x-hidden items-center flex-col bg-[#eeeeee] min-h-[90vh]">
			<Header />
			{children}
		</body>
	);
}
