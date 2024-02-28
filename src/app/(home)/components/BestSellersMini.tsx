import Image from "next/image";
import Link from "next/link";
import styles from "../styles/best-sellers.module.scss";
import testimage from "/public/images/testvertical.jpg";

export default function BestSellersMini() {
	return (
		<div className={styles.product_mini}>
			<Link href={"/"}>
				<div className={styles.image_cover}>
					<h1 className="font-kode text-[clamp(1rem,2vw,2vw)] leading-[clamp(1rem,2vw,2vw)]">
						Name
					</h1>
					<h3 className="font-kode text-[clamp(0.65rem,1.5vw,1.5vw)] leading-[clamp(0.65rem,1.5vw,1.5vw)]">
						Manufacturer
					</h3>
					<span className="font-kode text-[clamp(1rem,1.5vw,1.5vw)] leading-[clamp(1rem,1.5vw,1.5)]">
						$Preço
					</span>
				</div>
				<Image className="object-fill" width={360} height={480} src={testimage} alt="" />
			</Link>
		</div>
	);
}
