import DashboardUser from "./DashboardUser";
import Order from "../components/Order";
import DashboardOrders from "./DashboardOrders";
import DashboardFocusOrder from "./DashboardFocusOrder";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

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
			<div className="relative flex flex-col w-full h-full gap-[20px] text-all-black">
				<div className="flex h-[17vh] flex-col w-full justify-evenly">
					<div className="h-fit w-full flex justify-between">
						<DashboardUser />
						<section className="flex flex-col justify-center gap-[5px] h-full w-[35vw] bg-[white] pl-[30px] pr-2.5 py-2.5 rounded-md">
							<h3 className="text-left w-full text-[1.75vw] leading-[2vw] font-bebas">Most Recent Order</h3>
							<div className="flex w-full gap-[20px]">
								<div className="w-[50%]">
									<h1 className="text-[1.5vw] leading-[1.5vw]">Order ID: #12345</h1>
									<h3 className="text-[1.5vw] leading-[1.5vw]">Order Total: $1000000</h3>
								</div>
								<div className="w-[45%]">
									<h3 className="text-[1.5vw] leading-[1.5vw]">Order Status: Ongoing</h3>
									<h4 className="text-[1.5vw] leading-[1.5vw]">Order Date: 17/06/2024</h4>
								</div>
							</div>
						</section>
					</div>
				</div>
				{/* <div className="ml-[5px] mb-[-20px]">
					<span className="text-[2vw] text-focus-white leading-[2vw] font-bebas">Orders</span>
				</div> */}
				<div className="bg-[white] max-h-full h-[63vh] relative flex-col overflow-auto rounded-md hide-scrollbar">
					<DashboardOrders />
				</div>
			</div>
		</>
	);
}
