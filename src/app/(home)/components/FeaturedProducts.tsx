import ProductMiniature from "./ProductMiniature";
import s from "../styles/featured-products.module.scss";

export default function FeaturedProducts() {
	return (
		<div className={s.featured_products}>
			<div className={s.itens_1}>
				<ProductMiniature />
				<ProductMiniature />
				<ProductMiniature />
			</div>
			<div className={s.itens_2}>
				<ProductMiniature />
				<ProductMiniature />
				<ProductMiniature />
			</div>
		</div>
	);
}
