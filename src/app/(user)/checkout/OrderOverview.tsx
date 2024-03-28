"use client";

import { useEffect, useState } from "react";
import { useCheckpointContext } from "./contexts/CheckoutContext";
import s from "./checkout.module.scss";

export default function OrderOverview() {
	const { cartItens, setItens } = useCheckpointContext();
	const [shipTotal, setShipTotal] = useState<number>(0);
	const [totalTaxes, setTotalTaxes] = useState<number>(0);
	const [totalOfShips, setTotalOfShips] = useState<number>(0);

	useEffect(() => {
		if (cartItens && cartItens.length > 0) {
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
		<div className={s.overview}>
			<div className={s.overview_fiels}>
				<span>Total Ships Price</span>
				<span>${shipTotal}</span>
			</div>
			<div className={s.overview_fiels}>
				<span>Total Ship Units</span>
				<span>{totalOfShips} units</span>
			</div>
			<div className={s.overview_fiels}>
				<div>
					<span>Total Taxes</span>
					<div className={s.under_field}>
						<p>3% for cargo ships</p>
						<p>4% for exploration ships</p>
						<p>7% for warships</p>
					</div>
				</div>
				<span>${totalTaxes}</span>
			</div>
		</div>
	);
}
