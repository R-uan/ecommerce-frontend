import styles from "@/styles/product-mini.module.scss";
import Image from "next/image";
import testimage from "@/public/testimage.jpg";
import IProducts from "@/interfaces/IProducts";
export default function ProductMiniature({ data }: { data: IProducts }) {
	return (
		<div className={styles.main_container}>
			<div className={styles.product_image}>
				<Image src={testimage} alt=""></Image>
			</div>
			<div className={styles.product_information}>
				<div className={styles.info1}>
					<h3>{data.name}</h3>
					<span>Rating</span>
				</div>
				<div className={styles.info2}>
					<h3>{data.manufacturer_name}</h3>
				</div>
				<div className={styles.info3}>
					<h3>{data.category}</h3>
					<span>${data.unit_price}</span>
				</div>
			</div>
		</div>
	);
}
