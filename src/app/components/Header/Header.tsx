"use client";
import { store } from "@/redux/store";
import Link from "next/link";
import { Provider } from "react-redux";
import HeaderOptions from "./HeaderOptions";
import ProductCart from "./ProductCart";
import SearchProduct from "./SearchProduct";
import User from "./User";

export default function Header() {
	return (
		<Provider store={store}>
			<header className="bg-[#eeeeee] z-[101] justify-between items-center relative flex h-[10vh] w-full shadow-[0px_5px_20px_0px_rgba(0,0,0,0.75)] p-px text-all-black">
				<Link href={"/"}>HOME</Link>
				<HeaderOptions />
				<div className="h-full items-center w-[20vw] justify-between flex gap-[15px] mr-[25px]">
					<User />
					<div className="flex gap-[15px]">
						<SearchProduct />
						<ProductCart />
					</div>
				</div>
			</header>
		</Provider>
	);
}
