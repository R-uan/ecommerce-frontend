import { IProduct } from "@/interfaces/IProduct";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface IProductContext {
	product: IProduct | null;
	setProduct: React.Dispatch<SetStateAction<IProduct | null>>;
	fetched: boolean;
	setFetchStatus: React.Dispatch<SetStateAction<boolean>>;
	errorMessage: string | null;
	setErrorMessage: React.Dispatch<SetStateAction<string | null>>;
}

const ProductContext = createContext<IProductContext | null>(null);
export default function ProductProvider({ children }: { children: ReactNode }) {
	const [product, setProduct] = useState<IProduct | null>(null);
	const [fetched, setFetchStatus] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const State: IProductContext = {
		product,
		setProduct,
		fetched,
		setFetchStatus,
		errorMessage,
		setErrorMessage,
	};

	return <ProductContext.Provider value={State}>{children}</ProductContext.Provider>;
}

export function useProductContext() {
	const context = useContext(ProductContext);
	if (!context) throw new Error("Product Context Error");
	return context;
}
