import Image from "next/image";
import ProductMiniature from "../(catalog)/components/ProductMiniature";
import styles from "./best-sellers.module.scss";
import testimage from "/public/images/testvertical.jpg";
import Link from "next/link";
import BestSellersMini from "./BestSellersMini";

export default function BestSellers() {
	return (
		<>
			<div className={styles.best_sellers}>
				<BestSellersMini />
				<BestSellersMini />
				<BestSellersMini />
				<BestSellersMini />
				<BestSellersMini />
				<BestSellersMini />
			</div>
		</>
	);
}
