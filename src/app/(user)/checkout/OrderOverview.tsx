"use client";

import { ICart } from "@/interfaces/ICart";
import { useCheckpointContext } from "./contexts/CheckoutContext";
import { useEffect, useState } from "react";

export default function OrderOverview() {
	const { cartItens, setItens } = useCheckpointContext();
	const [shipTotal, setShipTotal] = useState<number>(0);
	const [totalTaxes, setTotalTaxes] = useState<number>(0);
	const [totalOfShips, setTotalOfShips] = useState<number>(0);

	useEffect(() => {
		if (cartItens) {
			const ship_total = cartItens
				.map((product) => {
					return product.units! * parseInt(product.unit_price);
				})
				.reduce((left, right) => {
					return left + right;
				});
			let total_of_ships = 0;
			let total_taxes = 0;
			cartItens.forEach((element) => {
				total_taxes += element.taxes!;
				total_of_ships += element.units!;
			});
			setShipTotal(ship_total);
			setTotalTaxes(total_taxes);
			setTotalOfShips(total_of_ships);
		}
	}, [cartItens]);

	return (
		<>
			<div className="w-full flex justify-between text-[1.5vw] leading-[1.5vw]">
				<span>Total Ships Price</span>
				<span>${shipTotal}</span>
			</div>
			<div className="w-full flex justify-between text-[1.5vw] leading-[1.5vw]">
				<span>Total Ship Units</span>
				<span>{totalOfShips} units</span>
			</div>
			<div className="w-full flex justify-between text-[1.5vw] leading-[1.5vw]">
				<div>
					<span>Total Taxes</span>
					<div className="ml-[15px]">
						<p className="text-[1vw] leading-[1vw]">5% for cargo ships</p>
						<p className="text-[1vw] leading-[1vw]">7% for exploration ships</p>
						<p className="text-[1vw] leading-[1vw]">10% for warships</p>
					</div>
				</div>
				<span>${totalTaxes}</span>
			</div>
		</>
	);
}
