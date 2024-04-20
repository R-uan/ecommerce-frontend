"use client";
import { ICartItem } from "@/interfaces/ICartItem";
import { IProduct } from "@/interfaces/IProduct";
import { RequestProducts } from "@/scripts/requests/RequestProducts";
import { ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

interface ICheckoutContext {
	cartItens: IProduct[] | null;
	setItens: React.Dispatch<SetStateAction<IProduct[] | null>>;
	UpdateItemAmount: (product_id: number, amount: number) => void;
	RemoveItemFromCart: (product_id: number) => void;
}

const CheckoutContext = createContext<ICheckoutContext | null>(null);

export default function CheckoutProvider({ children }: { children: ReactNode }) {
	const [cartItens, setItens] = useState<IProduct[] | null>(null);

	async function UpdateItemAmount(product_id: number, amount: number) {
		if (cartItens) {
			const new_itens = cartItens.map((product) => {
				if (product.id == product_id) return { ...product, units: amount };
				else return product;
			});
			setItens(new_itens);
		}
	}

	async function RemoveItemFromCart(product_id: number) {
		const storage = localStorage.getItem("cart");
		if (!storage || !cartItens) return;

		const cart: ICartItem[] = JSON.parse(storage);
		const new_cart_local = cart.filter((element) => element.id != product_id);
		localStorage.setItem("cart", JSON.stringify(new_cart_local));

		const newItemsState = cartItens.filter((element) => element.id !== product_id);
		setItens(newItemsState);
	}

	/* 
		cart: [
			{
				id: number,
				name: string,
				amount: number
			}
		]
	*/

	useEffect(() => {
		async function InitialCartItensFetch() {
			const storage = localStorage.getItem("cart");
			if (!storage) return;
			const cart: ICartItem[] = JSON.parse(storage);
			const product_ids = cart.map((item) => {
				return item.id;
			});
			console.log(product_ids);
			const itens: IProduct[] = await RequestProducts.Miniatures(product_ids);
			const update_itens = itens.map((product) => ({
				...product,
				units: 1,
				taxes: parseInt(product.unit_price) * 0.3,
			}));

			setItens(update_itens);
		}

		InitialCartItensFetch();
	}, []);

	return (
		<CheckoutContext.Provider value={{ cartItens, setItens, UpdateItemAmount, RemoveItemFromCart }}>
			{children}
		</CheckoutContext.Provider>
	);
}

export function useCheckpointContext() {
	const context = useContext(CheckoutContext);
	if (!context) throw new Error("UseCheckPointContext Error");
	return context;
}
