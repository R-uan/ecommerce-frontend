"use client";
import { ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface ICheckoutContext {
	cartItens: IProductsPartial[] | null;
	setItens: React.Dispatch<SetStateAction<IProductsPartial[] | null>>;
}
const CheckoutContext = createContext<ICheckoutContext | null>(null);

export default function CheckoutProvider({ children }: { children: ReactNode }) {
	const [cartItens, setItens] = useState<IProductsPartial[] | null>(null);
	return <CheckoutContext.Provider value={{ cartItens, setItens }}>{children}</CheckoutContext.Provider>;
}

export function useCheckpointContext() {
	const context = useContext(CheckoutContext);
	if (!context) throw new Error("UseCheckPointContext Error");
	return context;
}
