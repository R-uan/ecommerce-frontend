import IOrder from "@/interfaces/IOrder";
import { RequestUserOrders } from "@/scripts/requests/OrderRequests";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Order from "../components/Order";
import AuthenticationError from "@/scripts/error-handling/AuthenticationError";
import { useRouter } from "next/navigation";
import s from "../page.module.scss";
export default function DashboardOrders() {
	const router = useRouter();
	const [orders, setOrders] = useState<IOrder[] | null>(null);
	const [fetching, setFetchStatus] = useState<boolean>(true);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	async function GetUserOrders() {
		try {
			const user_orders = await RequestUserOrders();
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
		GetUserOrders();
		setFetchStatus(true);
	}, []);

	return (
		<section className="relative pt-2.5 w-full h-full flex flex-col gap-[5px]">
			{fetching ? (
				<div className="w-full h-full items-center justify-center flex m-auto">
					<span className="animate-spin">
						<AiOutlineLoading3Quarters size={50} />
					</span>
				</div>
			) : errorMessage ? (
				<div className={s.error_message}>
					<span className="text-[2vw]">{errorMessage}</span>
				</div>
			) : (
				orders?.map((order) => {
					return <Order key={order.id} order={order} />;
				})
			)}
		</section>
	);
}
