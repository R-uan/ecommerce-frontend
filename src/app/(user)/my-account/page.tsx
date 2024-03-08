"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import DashboardHome from "./Dashboard/DashboardHome";
import DashboardMenu from "./components/NavigationMenu";
import styles from "./page.module.scss";
export default function Profile() {
	return (
		<Provider store={store}>
			<main className="flex relative flex-1 bg-[#050a0e]">
				<DashboardMenu />
				<div className={styles.dashboard}>
					<DashboardHome />
				</div>
			</main>
		</Provider>
	);
}
