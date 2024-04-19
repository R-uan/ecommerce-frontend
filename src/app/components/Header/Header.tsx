"use client";
import { store } from "@/redux/store";
import { Suspense, useEffect, useState } from "react";
import { Provider } from "react-redux";
import MediaQuery from "react-responsive";
import LoadingScreen from "../LoadingScreen";
import LateralMenu from "./components/LateralMenu";
import RightIcons from "./components/RightIcons";
import Search from "./components/Search";
import User from "./components/User";
import { StyledHeader } from "./StyledHeader";

// TODO Mobile Search Pop Up
export default function Header({ bg, color = "black", abs = false }: { bg: boolean; color?: string; abs: boolean }) {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 200);
	}, []);
	return (
		<Provider store={store}>
			<Suspense fallback={<LoadingScreen />}>
				{loading ? (
					<LoadingScreen />
				) : (
					<StyledHeader $bg={bg} $abs={abs}>
						<div className={`text-all-${color}`}>
							<MediaQuery maxWidth={749}>
								<LateralMenu />
							</MediaQuery>
							<User />
							<MediaQuery minWidth={700}>
								<Search bg />
							</MediaQuery>
							<RightIcons />
						</div>
					</StyledHeader>
				)}
			</Suspense>
		</Provider>
	);
}
