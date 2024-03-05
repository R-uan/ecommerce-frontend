import { useEffect, useState } from "react";
import Order from "../components/Order";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RequestSingleOrder, RequestUserOrders } from "@/scripts/requests/OrderRequests";
import Cookies from "js-cookie";
import { RefreshToken } from "@/scripts/util";
import IOrder from "@/interfaces/IOrder";

export default function DashboardOrders() {
	const [userOrders, setUserOrders] = useState<IOrder[] | null>(null);
	async function GetUserOrders() {
		try {
			const user_orders = await RequestUserOrders();
			user_orders ? setUserOrders(user_orders) : null;
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		GetUserOrders();
	}, []);
	return (
		<section className="relative pt-2.5 w-full h-full flex flex-col gap-[5px]">
			{!userOrders ? (
				<div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full items-center justify-center flex m-auto">
					<span className="animate-spin">
						<AiOutlineLoading3Quarters size={50} />
					</span>
				</div>
			) : userOrders.length === 0 ? (
				<div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full items-center justify-center flex m-auto">
					<span className="text-[2vw]">No orders were found.</span>
				</div>
			) : (
				userOrders.map((order) => {
					return <Order key={order.id} order={order} />;
				})
			)}
		</section>
	);
}
