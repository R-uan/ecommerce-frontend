import styles from "@/styles/catalog.module.scss";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
	title: "Catalog",
	description: "",
};

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
	return <body className={styles.body}>{children}</body>;
}
