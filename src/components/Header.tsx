"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import SearchBar from "./Search-bar";

export default function Header() {
	return (
		<header className="w-full h-[70px] bg-[#191919]">
			<Provider store={store}>
				<SearchBar />
			</Provider>
			<span className="text-red-600">Do the Header</span>
		</header>
	);
}
