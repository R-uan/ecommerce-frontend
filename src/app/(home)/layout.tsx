import Footer from "../components/Footer";
import styles from "./styles/home.module.scss";
import Header from "../components/Header/Header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<body className={styles.body}>
			<Header bg={false} color="white" abs={true} />
			{children}
			<Footer />
		</body>
	);
}
