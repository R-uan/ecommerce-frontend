"use client";
import { store } from "@/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Provider } from "react-redux";
import HeaderOptions from "./HeaderOptions";
import User from "./User";
import s from "./styles/header.module.scss";
import HeaderSearch from "./Search";
import LateralMenu from "./LateralMenu";
import { IoMenuSharp } from "react-icons/io5";
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
