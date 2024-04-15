import { createContext, ReactNode, SetStateAction, useContext, useState } from "react";
import MyOrders from "../MyOrders/MyOrders";

export interface DashboardView {
	name: string;
	component: JSX.Element;
}

interface Context {
	currentView: DashboardView;
	setView: React.Dispatch<SetStateAction<DashboardView>>;
}
const DashboardContext = createContext<Context | null>(null);

export default function DashboardProvider({ children }: { children: ReactNode }) {
	const [currentView, setView] = useState<DashboardView>({ name: "My Orders", component: <MyOrders /> });
	return <DashboardContext.Provider value={{ currentView, setView }}>{children}</DashboardContext.Provider>;
}

export function useDashboardContext() {
	const context = useContext(DashboardContext);
	if (!context) throw new Error("Dashboard Context Error!");
	return context;
}
