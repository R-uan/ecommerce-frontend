import styles from "@/styles/home.module.scss";
export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return <body className={styles.body}>{children}</body>;
}
