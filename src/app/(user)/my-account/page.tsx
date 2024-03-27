"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import DashboardHome from "./Dashboard/DashboardHome";
import DashboardMenu from "./components/NavigationMenu";
import styles from "./page.module.scss";
export default function Profile() {
	// TODO Create a loading page while the application verifies the user authentication.
	return (
		<Provider store={store}>
			<main className="flex relative w-full h-full bg-[#050a0e]">
				<div className={styles.dashboard}>
					<DashboardHome />
				</div>
				<DashboardMenu />
			</main>
		</Provider>
	);
}
