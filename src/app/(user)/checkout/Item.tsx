"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import testimage from "../../../../public/images/product-test-image.jpg";
import { useCheckpointContext } from "./contexts/CheckoutContext";
import { ICart } from "@/interfaces/ICart";
import { IProductsPartial } from "@/interfaces/IProductsPartial";

export default function Item({ product, index }: { product: IProductsPartial; index: number }) {
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
		<div className="flex relative gap-[5px] flex-row w-full h-[8vw]">
			<div className="relative w-[8vw] h-[8vw] bg-[#eeeeee]">
				<Image className="rounded-md" src={testimage} alt="" fill={true} />
			</div>
			<div className="pt-[5px] w-[50%]">
				<h1 className="text-[2.5vw] leading-[2.5vw] font-medium">{product.name}</h1>
				<p className="text-[1.75vw] leading-[1.75vw]">{product.manufacturer}</p>
				<p className="text-[1.35vw] leading-[1.35vw]">{product.category}</p>
			</div>
			<div className="flex items-center flex-1 justify-between p-[5px_50px_5px_5px]">
				<div className="flex flex-col justify-center">
					<div className="flex flex-col items-center justify-center">
						<label htmlFor="amount" className="text-[1.25vw] leading-[1.25vw] text-center">
							Units: {product.units}
						</label>
						<input
							id="amount"
							type="number"
							min={1}
							max={5}
							defaultValue={productAmount}
							onChange={(e) => {
								UpdateItemAmount(product.id, parseInt(e.target.value));
							}}
							className="w-[50px] text-[1.5vw] text-center bg-transparent font-bold border-[1px] border-black"
						/>
					</div>
				</div>
				<div className="flex flex-col items-end">
					<label htmlFor="price" className="text-[1.25vw] leading-[1.25vw]">
						Total Price
					</label>
					<p id="price" className="text-[1.5vw] leading-[1.5vw]">
						{isNaN(parseInt(product.unit_price) * productAmount) ? 0 : parseInt(product.unit_price) * productAmount}
					</p>
					<span className="text-[0.95vw] leading-[0.95vw]">taxes included</span>
				</div>
			</div>
			<button onClick={Delete} className="flex justify-center items-center right-0 h-full w-[2vw] mr-[20px] rounded-tr-md rounded-br-md">
				<FaTrashCan />
			</button>
		</div>
	);
}
