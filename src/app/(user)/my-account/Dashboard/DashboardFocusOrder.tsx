import { FaRegCircle } from "react-icons/fa6";
import { FaCircle, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import ProductMiniatureOrder from "../components/ProductMiniatureOrder";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { IoCloseSharp } from "react-icons/io5";
import { toggleExpansion } from "@/redux/slices/ExpandOrderSlice";
import Order from "../components/Order";
export default function DashboardFocusOrder() {
	const state = useSelector((s: RootState) => s.expand_order);
	const dispatch = useDispatch();
	function FormatDate(input?: string | null) {
		return input ? new Date(input).toLocaleDateString() : null;
	}

	return (
		<section className="flex flex-col relative gap-[5px] m-[1px] items-center w-full h-full overflow-auto hide-scrollbar">
			<span className="text-[1.7vw] leading-[1.7vw] w-full pl-[15px] mt-[10px]">Order ID: {state.order?.id}</span>
			<button className="absolute top-[5px] right-[10px]" onClick={() => dispatch(toggleExpansion())}>
				<IoCloseSharp className="text-[1.25vw]" />
			</button>
			<div className="flex flex-col w-full h-fit gap-[19px] ">
				<div className="flex gap-[5vw] justify-center w-full pt-[10px]">
					<div className="flex flex-col items-center">
						{state.order?.order_date ? <FaCheckCircle className="text-[50px] fill-[#008a3a]" /> : <FaCircle className="text-[50px] fill-[#eeeeee]" />}
						<span className="text-[1.25vw]">Order Created</span>
						<p className="text-[1.25vw]">{FormatDate(state.order?.order_date)}</p>
					</div>
					<div className="flex flex-col items-center">
						{state.order?.payment_received ? <FaCheckCircle className="text-[50px] fill-[#008a3a]" /> : <FaCircle className="text-[50px] fill-[#eeeeee]" />}
						<span className="text-[1.25vw]">Payment Received</span>
						<p className="text-[1.25vw]">{FormatDate(state.order?.payment_received)}</p>
					</div>
					<div className="flex flex-col items-center">
						{state.order?.payment_received ? <FaCheckCircle className="text-[50px] fill-[#008a3a]" /> : <FaCircle className="text-[50px] fill-[#eeeeee]" />}
						<span className="text-[1.25vw]">In Production</span>
					</div>
					<div className="flex flex-col items-center">
						{state.order?.product_finished ? <FaCheckCircle className="text-[50px] fill-[#008a3a]" /> : <FaCircle className="text-[50px] fill-[#eeeeee]" />}
						<span className="text-[1.25vw]">Ready for pick-up</span>
						<p className="text-[1.25vw]">{FormatDate(state.order?.product_finished)}</p>
					</div>
					<div className="flex flex-col items-center">
						{state.order?.order_finalized ? <FaCheckCircle className="text-[50px] fill-[#008a3a]" /> : <FaCircle className="text-[50px] fill-[#eeeeee]" />}
						<span className="text-[1.25vw]">Finalized</span>
						<p className="text-[1.25vw]">{FormatDate(state.order?.order_finalized)}</p>
					</div>
				</div>
				<hr />
				<div className="w-full h-fit p-[10px]">
					<div className="flex w-full justify-around">
						<div className="text-center">
							<p className="text-[1.5vw] leading-[1.5vw]">Created on</p>
							<p className="text-[1.5vw] leading-[1.5vw]">{FormatDate(state.order?.order_date)}</p>
						</div>
						<div className="text-center">
							<p className="text-[1.5vw] leading-[1.5vw]">Estimated Date</p>
							<p className="text-[1.5vw] leading-[1.5vw]">Date</p>
						</div>
						<div className="text-center">
							<p className="text-[1.5vw] leading-[1.5vw]">Total Price</p>
							<p className="text-[1.5vw] leading-[1.5vw]">${state.order?.total}</p>
						</div>
						<div className="text-center">
							<p className="text-[1.5vw] leading-[1.5vw]">Payment Method</p>
							<p className="text-[1.5vw] leading-[1.5vw]">{state.order?.payment_method}</p>
						</div>
						<div className="text-center">
							<p className="text-[1.5vw] leading-[1.5vw]">Planet Dropoff</p>
							<p className="text-[1.5vw] leading-[1.5vw]">{state.order?.planet_destination.name}</p>
						</div>
					</div>
				</div>
				<hr />
				<div className="flex w-full h-full">
					<div className="flex-1 justify-evenly grid grid-cols-[repeat(3,auto)] gap-[10px] pb-[10px]">
						{state.order?.order_itens.map((item) => {
							return <ProductMiniatureOrder key={item.id} product={item} />;
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
