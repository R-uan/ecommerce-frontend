"use client";
import { store } from "@/redux/store";
import { Suspense } from "react";
import { Provider } from "react-redux";
import ProductMap from "../components/ProductMap";

export default function Catalog() {
	return (
		<Provider store={store}>
			<main className="w-full min-h-[100vh]">
				<div className="h-full flex w-full relative items-center justify-center flex-col">
					<Suspense>
						<ProductMap />
					</Suspense>
				</div>
			</main>
		</Provider>
	);
}
