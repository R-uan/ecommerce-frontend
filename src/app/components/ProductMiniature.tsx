import styles from "@/styles/product-mini.module.scss";
import Image from "next/image";
import testimage from "@/public/testimage.jpg";
export default function ProductMiniature() {
	return (
		<div className={styles.main_container}>
			<div className={styles.product_image}>
				<Image src={testimage} alt=""></Image>
			</div>
			<div className={styles.product_information}>
				<div className={styles.main_information}>
					<h3>Name of the Ship</h3>
					<h4>$999999999</h4>
					<h5>Category</h5>
				</div>
				<div className={styles.additional_information}>
					<span>Rating</span>
					<h4>$999999999</h4>
				</div>
			</div>
		</div>
	);
}
