"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import MapProducts from "./MapProducts";

export default function Products() {
	return (
		<Provider store={store}>
			<MapProducts />
		</Provider>
	);
}
