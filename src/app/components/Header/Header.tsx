"use client";
import User from "./components/User";
import { store } from "@/redux/store";
import RightIcons from "./components/RightIcons";
import { Provider } from "react-redux";
import Search from "./components/Search";
import MediaQuery from "react-responsive";
import s from "./styles/header.module.scss";
import LateralMenu from "./components/LateralMenu";

export default function Header({
	transparent = false,
	color = "black",
	absolute = false,
}: {
	transparent?: boolean;
	color?: string;
	absolute?: boolean;
}) {
	return (
		<Provider store={store}>
			<header
				style={{
					backgroundColor: transparent ? "transparent" : "#eeeeee",
					position: absolute ? "absolute" : "relative",
				}}
				className={s.header}>
				<div className={`text-all-${color}`}>
					<MediaQuery maxWidth={749}>
						<LateralMenu />
					</MediaQuery>
					<User />
					<MediaQuery minWidth={700}>
						<Search transparent={transparent} />
					</MediaQuery>
					<RightIcons />
				</div>
			</header>
		</Provider>
	);
}
