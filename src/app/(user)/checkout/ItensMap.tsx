"use client";
import { useEffect } from "react";
import Item from "./Item";
import { useCheckpointContext } from "./contexts/CheckoutContext";
import s from "./checkout.module.scss";

export default function ItensMap() {
	const { cartItens, InitialCartItensFetch } = useCheckpointContext();

	useEffect(() => {
		InitialCartItensFetch();
	}, []);

	return (
		<div className={s.itens_map}>
			{cartItens && cartItens?.length > 0 ? (
				<div className={s.grid}>
					{cartItens?.map((product, index) => {
						return <Item key={product.id} product={product} index={index} />;
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
