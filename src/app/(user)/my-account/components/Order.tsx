import IOrder from "@/interfaces/IOrder";
import { setCurrentOrder, toggleExpansion } from "@/redux/slices/ExpandOrderSlice";
import { RootState } from "@/redux/store";
import { RequestSingleOrder } from "@/scripts/requests/OrderRequests";
import { useDispatch, useSelector } from "react-redux";

export default function Order({ order }: { order: IOrder }) {
	const state = useSelector((s: RootState) => s.expand_order);
	const dispatch = useDispatch();
	const date = new Date(order.order_date);

	async function ExpandOrder() {
		try {
			const request_order = await RequestSingleOrder(String(order.id));
			dispatch(setCurrentOrder(request_order));
			console.log(request_order);
			dispatch(toggleExpansion());
			console.log(state.expanded);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<button onClick={ExpandOrder}>
			<div className="w-full gap-[20px] flex items-center h-[100px] bg-[#eeeeee]">
				<div className="px-[50px] w-full flex flex-row justify-between gap-[50px]">
					<div>
						<p className="text-[1.5vw] leading-[1.5vw]">Order ID</p>
						<span className="text-[1.5vw] leading-[1.5vw]">{order.id}</span>
					</div>
					<div>
						<p className="text-[1.5vw] leading-[1.5vw]">Date of Order</p>
						<span className="text-[1.5vw] leading-[1.5vw]">{date.toLocaleDateString()}</span>
					</div>
					<div>
						<p className="text-[1.5vw] leading-[1.5vw]">Total of Order</p>
						<span className="text-[1.5vw] leading-[1.5vw]">${order.total}</span>
					</div>
					<div>
						<p className="text-[1.5vw] leading-[1.5vw]">Order Status</p>
						<span className="text-[1.5vw] leading-[1.5vw]">{order.status}</span>
					</div>
					<div>
						<p className="text-[1.5vw] leading-[1.5vw]">Planet Destination</p>
						<span className="text-[1.5vw] leading-[1.5vw]">{order.planet_destination}</span>
					</div>
				</div>
			</div>
		</button>
	);
}
