import { RootState } from "@/redux/store";
import DashboardUser from "./DashboardUser";
import DashboardOrders from "./DashboardOrders";
import { useDispatch, useSelector } from "react-redux";
import DashboardFocusOrder from "./DashboardFocusOrder";
import s from "../page.module.scss";
export default function DashboardHome() {
	const state = useSelector((s: RootState) => s.expand_order);
	const dispatch = useDispatch();
	return (
		<>
			{!state.expanded ? null : (
				<div className=" z-50 w-[100%] h-full absolute p-[10px]">
					<div className="bg-white w-full h-full rounded-md text-all-black">
						<DashboardFocusOrder />
					</div>
				</div>
			)}
			<div className={s.dashboard_landing}>
				<div>
					<DashboardUser />
				</div>
				<div className="hide-scrollbar">
					<DashboardOrders />
				</div>
			</div>
		</>
	);
}
