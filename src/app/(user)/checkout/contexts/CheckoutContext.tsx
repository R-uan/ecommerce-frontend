"use client";
import { ICart } from "@/interfaces/ICart";
import { IProductsPartial } from "@/interfaces/IProductsPartial";
import { RequestSome } from "@/scripts/requests/RequestProducts";
import { ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

interface ICheckoutContext {
	cartItens: IProductsPartial[] | null;
	setItens: React.Dispatch<SetStateAction<IProductsPartial[] | null>>;
	InitialCartItensFetch: () => void;
	UpdateItemAmount: (product_id: number, amount: number) => void;
}
const CheckoutContext = createContext<ICheckoutContext | null>(null);
export default function CheckoutProvider({ children }: { children: ReactNode }) {
	const [cartItens, setItens] = useState<IProductsPartial[] | null>(null);

	async function UpdateItemAmount(product_id: number, amount: number) {
		if (cartItens) {
			const new_itens = cartItens.map((product) => {
				if (product.id == product_id) return { ...product, units: amount };
				else return product;
			});
			setItens(new_itens);
		}
	}

	async function InitialCartItensFetch() {
		const itens: IProductsPartial[] = await RequestSome();
		const update_itens = itens.map((product) => ({
			...product,
			units: 1,
			taxes: parseInt(product.unit_price) * 0.3,
		}));

		setItens(update_itens);
	}

	return <CheckoutContext.Provider value={{ cartItens, setItens, InitialCartItensFetch, UpdateItemAmount }}>{children}</CheckoutContext.Provider>;
}

export function useCheckpointContext() {
	const context = useContext(CheckoutContext);
	if (!context) throw new Error("UseCheckPointContext Error");
	return context;
}
