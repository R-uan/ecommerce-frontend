"use client";
import { RequestSome } from "@/scripts/requests/RequestProducts";
import { useEffect, useState } from "react";
import Item from "./Item";
import CheckoutProvider, { useCheckpointContext } from "./contexts/CheckoutContext";

export default function ItensMap() {
	const { cartItens, setItens } = useCheckpointContext();
	async function Fetch() {
		const itens: IProductsPartial[] = await RequestSome();
		if (itens) setItens(itens);
	}

	useEffect(() => {
		Fetch();
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
