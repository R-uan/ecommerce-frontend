import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import styles from "./styles/home.module.scss";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<body className={styles.body}>
			<Header transparent={true} color="white" absolute={true} />
			{children}
			<Footer />
		</body>
	);
}
