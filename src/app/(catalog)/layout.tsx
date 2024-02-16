import styles from "@/styles/catalog.module.scss";
import type { Metadata } from "next";
import "../globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export const metadata: Metadata = {
	title: "Catalog",
	description: "",
};

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
	return <body className={styles.layout}>{children}</body>;
}
