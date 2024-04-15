import NavMenu from "./NavMenu";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import MyProfile from "./Profile/MyProfile";
import s from "./styles/dashboard.module.scss";
import DashboardFocusOrder from "./MyOrders/ExpandOrder";
import { useDashboardContext } from "./ContextProvider/DashboardProvider";

export default function DashboardHome() {
	const state = useSelector((s: RootState) => s.expand_order);
	const { currentView } = useDashboardContext();
	return (
		<>
			{!state.expanded ? null : <DashboardFocusOrder />}
			<div className={s.dashboard}>
				<div>
					<div className="flex gap-[10px]">
						<MyProfile />
						<NavMenu />
					</div>
					<div className="hide-scrollbar">{currentView.component}</div>
				</div>
			</div>
		</>
	);
}
