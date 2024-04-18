"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import Dashboard from "./Dashboard/Dashboard";
import DashboardProvider from "./Dashboard/ContextProvider/DashboardProvider";
export default function Profile() {
	// TODO Create a loading page while the application verifies the user authentication.
	return (
		<Provider store={store}>
			<DashboardProvider>
				<main className="flex relative w-full h-full bg-[#050a0e]">
					<Dashboard />
				</main>
			</DashboardProvider>
		</Provider>
	);
}
