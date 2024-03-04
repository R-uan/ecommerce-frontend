import IOrder from "@/interfaces/IOrder";

export default function Order({ order }: { order: IOrder }) {
	let data = new Date(order.order_date);
	return (
		<div className="w-full gap-[20px] flex items-center h-[100px] bg-[#eeeeee]">
			<div className="px-[50px] w-full flex flex-row justify-between gap-[50px]">
				<div>
					<p className="text-[1.5vw] leading-[1.5vw]">Order ID</p>
					<span className="text-[1.5vw] leading-[1.5vw]">{order.id}</span>
				</div>
				<div>
					<p className="text-[1.5vw] leading-[1.5vw]">Date of Order</p>
					<span className="text-[1.5vw] leading-[1.5vw]">{data.toLocaleDateString()}</span>
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
					<p className="text-[1.5vw] leading-[1.5vw]">Planet for Delivery</p>
					<span className="text-[1.5vw] leading-[1.5vw]">Uranus</span>
				</div>
			</div>
		</div>
	);
}
