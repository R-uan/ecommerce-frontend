import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";
import styles from "@/styles/auth.module.scss";

export const metadata: Metadata = {
	title: "Sign in to Gemini",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={styles.body}>
				<main className={styles.main}>
					<div className={styles.logo}>
						<Link href={"/"}>LOGO</Link>
					</div>
					<div className={styles.main_content}>{children}</div>
				</main>
			</body>
		</html>
	);
}
