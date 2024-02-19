import styles from "@/styles/product-mini.module.scss";
import Image from "next/image";
import testimage from "../../../../public/images/testvertical.jpg";
import IProducts from "@/interfaces/IProducts";
export default function ProductMiniature({ data }: { data: IProducts }) {
	const { availability } = data;
	return (
		<div className={styles.main_container}>
			<div className={styles.product_image}>
				{!availability ? null : (
					<div className={styles.unavailable_item}>
						<h3>NOT AVAILABLE</h3>
					</div>
				)}
				<Image className={styles.image} src={testimage} alt=""></Image>
			</div>
			<div className={styles.product_information}>
				<div className={styles.info1}>
					<h3>{data.name}</h3>
					<h6>{data.manufacturer_name}</h6>
				</div>
				<div className={styles.info2}>
					<h3>{data.category}</h3>
					<span>${data.unit_price}</span>
				</div>
			</div>
		</div>
	);
}
