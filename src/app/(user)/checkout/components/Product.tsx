"use client";
import Image from "next/image";
import { useState } from "react";
import { ICart } from "@/interfaces/ICart";
import { FaTrashCan } from "react-icons/fa6";
import s from "../styles/product.module.scss";
import { IProduct } from "@/interfaces/IProduct";
import { useCheckpointContext } from "../contexts/CheckoutContext";
import testimage from "../../../../public/images/product-test-image.jpg";

export default function Product({ product, index }: { product: IProduct; index: number }) {
	const [productAmount, setAmount] = useState(1);
	const { cartItens, setItens, UpdateItemAmount } = useCheckpointContext();

	function RemoveProperty(obj: ICart, propToRemove: number) {
		const { [propToRemove]: removedProp, ...rest } = obj;
		return rest;
	}

	function Delete() {
		const storage = localStorage.getItem("cart");
		if (cartItens && storage) {
			const cart: ICart = JSON.parse(storage);
			const new_properties = RemoveProperty(cart, product.id);

			const ind = cart.uniques.indexOf(product.id);
			const new_cart = [...cart.uniques.slice(0, ind), ...cart.uniques.slice(ind + 1)];
			new_properties.uniques = new_cart;
			localStorage.setItem("cart", JSON.stringify(new_properties));

			const new_array = [...cartItens.slice(0, index), ...cartItens.slice(index + 1)];
			setItens(new_array);
		}
	}

	return (
		<div className={s.product}>
			<div className={s.product_image}>
				<Image className="rounded-md" src={testimage} alt="" fill={true} />
			</div>
			<div className={s.information}>
				<span>{product.name}</span>
				<span>{product.manufacturer}</span>
				<span>{product.category}</span>
			</div>
			<div className={s.other}>
				<div>
					<div>
						<label htmlFor="amount">Units: {product.units}</label>
						<input
							id="amount"
							type="number"
							min={1}
							max={5}
							defaultValue={productAmount}
							onChange={(e) => {
								UpdateItemAmount(product.id, parseInt(e.target.value));
							}}
						/>
					</div>
				</div>
				<div>
					<label htmlFor="price">Total Price</label>
					<p id="price">
						{isNaN(parseInt(product.unit_price) * productAmount)
							? 0
							: parseInt(product.unit_price) * productAmount}
					</p>
					<span>taxes included</span>
				</div>
			</div>
			<button onClick={Delete}>
				<FaTrashCan />
			</button>
		</div>
	);
}
