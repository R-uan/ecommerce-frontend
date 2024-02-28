import styles from "./styles/home.module.scss";
/* import "../globals.css"; */
export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return <body className={styles.body}>{children}</body>;
}
