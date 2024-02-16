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
				<div className={styles.main_information}>
					<h3>{data.name}</h3>
					<h4>${data.unit_price}</h4>
					<h5>{data.category}</h5>
				</div>
				<div className={styles.additional_information}>
					<span>Rating</span>
				</div>
			</div>
		</div>
	);
}
