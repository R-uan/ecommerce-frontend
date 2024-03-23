import Order from "../components/Order";
import IOrder from "@/interfaces/IOrder";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RequestUserOrders } from "@/scripts/requests/OrderRequests";
import ApiRequestError from "@/scripts/error-handling/ApiRequestError";

export default function DashboardOrders() {
	const [userOrders, setUserOrders] = useState<IOrder[] | null>(null);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	async function GetUserOrders() {
		try {
			const user_orders = await RequestUserOrders();
			user_orders ? setUserOrders(user_orders) : setErrorMessage("Unable do retrieve orders.");
		} catch (error) {
			if (error instanceof ApiRequestError) setErrorMessage(error.message);
			else setErrorMessage("Unexpected Error");
		}
	}

	useEffect(() => {
		GetUserOrders();
	}, []);
	return (
		<section className="relative pt-2.5 w-full h-full flex flex-col gap-[5px]">
			{!userOrders ? (
				<div className="w-full h-full items-center justify-center flex m-auto">
					<span className="animate-spin">
						<AiOutlineLoading3Quarters size={50} />
					</span>
				</div>
			) : userOrders.length === 0 || errorMessage ? (
				<div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full items-center justify-center flex m-auto">
					<span className="text-[2vw]">{errorMessage ? errorMessage : "No orders were found."}</span>
				</div>
			) : (
				userOrders.map((order) => {
					return <Order key={order.id} order={order} />;
				})
			)}
		</section>
	);
}
