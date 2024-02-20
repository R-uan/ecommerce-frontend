import Image from "next/image";
import Link from "next/link";
import styles from "./best-sellers.module.scss";
import testimage from "/public/images/testvertical.jpg";

export default function BestSellersMini() {
	return (
		<div className={styles.product_mini}>
			<div className={styles.image}>
				<Link href={"/"}>
					<div className={styles.image_cover}>
						<h1>Name</h1>
						<h3>Manufacturer</h3>
						<span>$Preço</span>
					</div>
					<Image src={testimage} alt="" />
				</Link>
			</div>
		</div>
	);
}
