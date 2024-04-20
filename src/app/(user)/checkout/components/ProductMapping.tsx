"use client";
import Product from "./Product";
import { useEffect } from "react";
import s from "../styles/checkout.module.scss";
import { useCheckpointContext } from "../contexts/CheckoutContext";

export default function ProductMapping() {
	const { cartItens } = useCheckpointContext();
	return (
		<div className={s.itens_map}>
			{cartItens && cartItens?.length > 0 ? (
				<div className={s.grid}>
					{cartItens?.map((product, index) => {
						return <Product key={product.id} product={product} index={index} />;
					})}
				</div>
			) : (
				<div className={s.empty}>
					<span className="text-[2vw] font-bebas">Cart is Empty</span>
				</div>
			)}
		</div>
	);
}
