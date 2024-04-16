import IOrder from "@/interfaces/IOrder";
import { RootState } from "@/redux/store";
import s from "../styles/order.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RequestSingleOrder } from "@/scripts/requests/OrderRequests";
import { setCurrentOrder, toggleExpansion } from "@/redux/slices/ExpandOrderSlice";

export default function Order({ order }: { order: IOrder }) {
	const state = useSelector((s: RootState) => s.expand_order);
	const dispatch = useDispatch();
	const date = new Date(order.order_date);

	async function ExpandOrder() {
		try {
			dispatch(toggleExpansion());
			const request_order = await RequestSingleOrder(String(order.id));
			dispatch(setCurrentOrder(request_order));
		} catch (error) {
			// TODO Error handling
		}
	}

	return (
		<button onClick={ExpandOrder}>
			<div className={s.order}>
				<div>
					<div>
						<p>Order ID</p>
						<span>{order.id}</span>
					</div>
					<div>
						<p>Date of Order</p>
						<span>{date.toLocaleDateString()}</span>
					</div>
					<div>
						<p>Total of Order</p>
						<span>${order.total}</span>
					</div>
					<div>
						<p>Order Status</p>
						<span>{order.status}</span>
					</div>
					<div>
						<p>Planet Destination</p>
						<span>{order.planet_destination?.name}</span>
					</div>
				</div>
			</div>
		</button>
	);
}
