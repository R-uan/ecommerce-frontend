import Image from "next/image";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { OrderItem } from "@/interfaces/IOrder";
import s from "../styles/product-miniature.module.scss";

export default function ProductMiniatureOrder({ product }: { product: OrderItem }) {
	const state = useSelector((s: RootState) => s.expand_order);

	return (
		<div className={s.miniature}>
			<div className={s.product_image}>
				<Image alt="product-miniature" src={""} />
			</div>
			<div className={s.product_information}>
				<div>
					<h1>{product.products.name}</h1>
					<h3>{product.products.manufacturer.name}</h3>
				</div>
				<div>
					<div>
						<p>{product.products.category}</p>
						<p>{product.amount}un</p>
					</div>
					<div>
						<p>${product.unit_price} unit</p>
						<p>${product.total_price} total</p>
					</div>
				</div>
			</div>
		</div>
	);
}
