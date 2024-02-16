"use client";
import SideMenu from "@/app/(catalog)/components/SideMenu";
import { RootState } from "@/redux/store";
import styles from "@/styles/catalog.module.scss";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import ProductMap from "../components/ProductMap";
export default function App() {
	const productList = useSelector((s: RootState) => s.productList);

	function Cfl(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	const params = useSearchParams();
	const q = params.get("q");
	return (
		<>
			<Header />
			<div className={styles.main_container}>
				<div className={styles.cb1}>
					<SideMenu />
					<div className={styles.catalog_itens}>
						<div className={styles.upper_bar}>
							<h3>Results</h3>
							<p>Showing {q}</p>
						</div>
						<section className={styles.catalog_map}>
							<ProductMap />
						</section>
					</div>
				</div>
			</div>
		</>
	);
}
