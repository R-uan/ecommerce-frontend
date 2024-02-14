import styles from "@/styles/coringuei.module.scss";
import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Catalog",
	description: "",
};

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
	return <body className={styles.layout}>{children}</body>;
}
