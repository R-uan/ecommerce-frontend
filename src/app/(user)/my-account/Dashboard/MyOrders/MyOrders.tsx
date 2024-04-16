import Order from "./Order";
import IOrder from "@/interfaces/IOrder";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import s from "../styles/my-orders.module.scss";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RequestUserOrders } from "@/scripts/requests/OrderRequests";
import AuthenticationError from "@/scripts/error-handling/AuthenticationError";

export default function MyOrders() {
	const router = useRouter();
	const [orders, setOrders] = useState<IOrder[] | null>(null);
	const [fetching, setFetchStatus] = useState<boolean>(true);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	async function GetMyOrders() {
		try {
			const user_orders = await RequestUserOrders();
			console.log(user_orders);
			if (user_orders) user_orders.length > 0 ? setOrders(user_orders) : setErrorMessage("No orders were found.");
			else setErrorMessage("Unable do retrieve orders.");
			setFetchStatus(false);
		} catch (error) {
			if (error instanceof Error) setErrorMessage(error.message);
			else if (error instanceof AuthenticationError) router.refresh();
			else setErrorMessage("Unexpected Error");
			setFetchStatus(false);
		}
	}

	useEffect(() => {
		GetMyOrders();
		setFetchStatus(true);
	}, []);

	return (
		<section className={s.my_orders}>
			{fetching ? (
				<div className={s.loading}>
					<span className="animate-spin">
						<AiOutlineLoading3Quarters size={50} />
					</span>
				</div>
			) : errorMessage ? (
				<div className={s.error_message}>
					<span>{errorMessage}</span>
				</div>
			) : orders ? (
				orders?.map((order) => {
					return <Order key={order.id} order={order} />;
				})
			) : (
				<div className={s.nothing_found}>
					<span className="text-[2vw]">NO ORDERS TO SHOW</span>
				</div>
			)}
		</section>
	);
}
