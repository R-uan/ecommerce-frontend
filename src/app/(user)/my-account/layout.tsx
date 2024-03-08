import Header from "@/app/components/Header/Header";
import styles from "./styles/home.module.scss";
import Footer from "@/app/components/Footer";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<body className="flex flex-col w-full h-[100vh]">
			<Header />
			{children}
		</body>
	);
}
