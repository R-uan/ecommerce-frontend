"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import MapQueryResult from "./MapQueryResult";

export default function Search() {
	return (
		<Provider store={store}>
			<MapQueryResult />
		</Provider>
	);
}
