"use client";
import User from "./User";
import Link from "next/link";
import { useState } from "react";
import HeaderSearch from "./Search";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import LateralMenu from "./LateralMenu";
import HeaderOptions from "./HeaderOptions";
import s from "./styles/header.module.scss";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

export default function Header({
	transparent = false,
	color = "black",
	absolute = false,
}: {
	transparent?: boolean;
	color?: string;
	absolute?: boolean;
}) {
	const [isOpen, setIsOpen] = useState(false);
	// TODO Login pop up
	return (
		<Provider store={store}>
			<header
				style={{
					backgroundColor: transparent ? "transparent" : "#eeeeee",
					position: absolute ? "absolute" : "relative",
				}}
				className={s.header}>
				{isOpen ? null : <HeaderOptions transparent />}
				<div className={`text-all-${color}`}>
					<LateralMenu />
					<User />
					{!isOpen ? null : <HeaderSearch setIsOpen={setIsOpen} transparent={transparent} />}
					<div className={s.right_icons}>
						<button onClick={() => setIsOpen(!isOpen)}>
							<FaSearch className={s.icon} />
						</button>
						<Link href="/checkout">
							<FaShoppingCart className={s.icon} />
						</Link>
					</div>
				</div>
			</header>
		</Provider>
	);
}
