"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import styles from "@/styles/catalog.module.scss";
import ProductMap from "../components/ProductMap";
import { useSearchParams } from "next/navigation";
import Header from "../../components/Header/Header";
export default function App() {
	const productList = useSelector((s: RootState) => s.productsData);

	function Cfl(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	const params = useSearchParams();
	const q = params.get("q");
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.cb1}>
					<div className={styles.banner}>
						<h3>{!q ? "Catalog" : q}</h3>
					</div>
					<ProductMap />
				</div>
			</main>
		</>
	);
}
