import { RootState } from "@/redux/store";
import DashboardUser from "./DashboardUser";
import DashboardOrders from "./DashboardOrders";
import { useDispatch, useSelector } from "react-redux";
import DashboardFocusOrder from "./DashboardFocusOrder";
import { FaGithub } from "react-icons/fa6";

import s from "../page.module.scss";
import EditProfile from "./EditProfile";
import NavMenu from "./NavMenu";
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
				<div className="flex gap-[10px]">
					<DashboardUser />
					<NavMenu />
				</div>
				<div className="hide-scrollbar">
					<EditProfile />
				</div>
			</div>
		</>
	);
}
