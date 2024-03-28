"use client";
import { store } from "@/redux/store";
import { Suspense } from "react";
import { Provider } from "react-redux";
import ProductMap from "../components/ProductMap";
import FilterOptions from "../components/FilterOptions";

export default function Catalog() {
	// TODO Media query, filter toggle to show the filter
	return (
		<Provider store={store}>
			<main className="w-full min-h-[100vh]">
				<div className="h-[15vh] w-full"></div>
				<div className="h-full flex w-full relative justify-center gap-[30px]">
					<Suspense>
						<ProductMap />
					</Suspense>
					<FilterOptions />
				</div>
			</main>
		</Provider>
	);
}
