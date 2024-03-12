"use client";
import { RequestSome } from "@/scripts/requests/RequestProducts";
import { useEffect } from "react";
import Item from "./Item";
import { useCheckpointContext } from "./contexts/CheckoutContext";
import { IProductsPartial } from "@/interfaces/IProductsPartial";

export default function ItensMap() {
	const { cartItens, InitialCartItensFetch } = useCheckpointContext();

	useEffect(() => {
		InitialCartItensFetch();
	}, []);

	return (
		<>
			{cartItens && cartItens?.length > 0 ? (
				cartItens?.map((product, index) => {
					return <Item key={product.id} product={product} index={index} />;
				})
			) : (
				<div className="w-full h-full flex justify-center items-center">
					<span className="text-[2vw] font-bebas">Cart is Empty</span>
				</div>
			)}
		</>
	);
}
