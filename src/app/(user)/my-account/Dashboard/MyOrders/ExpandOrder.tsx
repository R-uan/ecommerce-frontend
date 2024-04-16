import { RootState } from "@/redux/store";
import { IoCloseSharp } from "react-icons/io5";
import s from "../styles/expand-order.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { FaCheckCircle, FaCircle } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ProductMiniatureOrder from "./ProductMiniatureOrder";
import { toggleExpansion } from "@/redux/slices/ExpandOrderSlice";

export default function ExpandOrder() {
	const state = useSelector((s: RootState) => s.expand_order);
	const dispatch = useDispatch();
	function FormatDate(input?: string | null) {
		return input ? new Date(input).toLocaleDateString() : null;
	}

	return (
		<div className={s.expand_order}>
			<div>
				<section>
					{!state.order ? (
						<div className={s.loading}>
							<span className="animate-spin">
								<AiOutlineLoading3Quarters size={50} />
							</span>
						</div>
					) : (
						<div className={s.order}>
							<span>Order ID: {state.order?.id}</span>
							<button onClick={() => dispatch(toggleExpansion())}>
								<IoCloseSharp className="text-[1.25vw]" />
							</button>
							<div>
								<div className={s.order_status_icon}>
									<div>
										{state.order?.order_date ? (
											<FaCheckCircle className="text-[50px] fill-[#008a3a]" />
										) : (
											<FaCircle className="text-[50px] fill-[#eeeeee]" />
										)}
										<span className="text-[1.25vw]">Order Created</span>
										<p className="text-[1.25vw]">{FormatDate(state.order?.order_date)}</p>
									</div>
									<div>
										{state.order?.payment_received ? (
											<FaCheckCircle className="text-[50px] fill-[#008a3a]" />
										) : (
											<FaCircle className="text-[50px] fill-[#eeeeee]" />
										)}
										<span className="text-[1.25vw]">Payment Received</span>
										<p className="text-[1.25vw]">{FormatDate(state.order?.payment_received)}</p>
									</div>
									<div>
										{state.order?.payment_received ? (
											<FaCheckCircle className="text-[50px] fill-[#008a3a]" />
										) : (
											<FaCircle className="text-[50px] fill-[#eeeeee]" />
										)}
										<span className="text-[1.25vw]">In Production</span>
									</div>
									<div>
										{state.order?.product_finished ? (
											<FaCheckCircle className="text-[50px] fill-[#008a3a]" />
										) : (
											<FaCircle className="text-[50px] fill-[#eeeeee]" />
										)}
										<span className="text-[1.25vw]">Ready for pick-up</span>
										<p className="text-[1.25vw]">{FormatDate(state.order?.product_finished)}</p>
									</div>
									<div>
										{state.order?.order_finalized ? (
											<FaCheckCircle className="text-[50px] fill-[#008a3a]" />
										) : (
											<FaCircle className="text-[50px] fill-[#eeeeee]" />
										)}
										<span className="text-[1.25vw]">Finalized</span>
										<p className="text-[1.25vw]">{FormatDate(state.order?.order_finalized)}</p>
									</div>
								</div>
								<hr />
								<div className={s.order_status_text}>
									<div>
										<div>
											<p>Created on</p>
											<p>{FormatDate(state.order?.order_date)}</p>
										</div>
										<div>
											<p>Estimated Date</p>
											<p>Date</p>
										</div>
										<div>
											<p>Total Price</p>
											<p>${state.order?.total}</p>
										</div>
										<div>
											<p>Payment Method</p>
											<p>{state.order?.payment_method}</p>
										</div>
										<div>
											<p>Planet Dropoff</p>
											<p>{state.order?.planet_destination.name}</p>
										</div>
									</div>
								</div>
								<hr />
								<div className={s.orders_products}>
									{/* Could not convert this tailwind without breaking the style ¯\_(ツ)_/¯ */}
									<div className="flex-1 justify-evenly grid grid-cols-[repeat(3,auto)] gap-[10px] pb-[10px]">
										{state.order?.order_itens.map((item) => {
											return <ProductMiniatureOrder key={item.id} product={item} />;
										})}
									</div>
								</div>
							</div>
						</div>
					)}
				</section>
			</div>
		</div>
	);
}
