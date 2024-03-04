import { FaRegCircle } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import ProductMiniatureOrder from "../components/ProductMiniatureOrder";
export default function DashboardFocusOrder() {
	return (
		<section className="flex flex-col relative gap-[5px] m-[1px]  items-center w-full h-full overflow-auto hide-scrollbar">
			<span className="text-[1.7vw] leading-[1.7vw] w-full pl-[15px] mt-[10px]">Order: #ORDERID</span>
			<div className="flex flex-col w-full h-fit gap-[19px] ">
				<div className="flex gap-[5vw] justify-center w-full pt-[10px]">
					<div className="flex flex-col items-center">
						<FaCircle className="text-[50px] fill-[#eeeeee]" />
						<span className="text-[1.25vw]">Order Created</span>
					</div>
					<div className="flex flex-col items-center">
						<FaCircle className="text-[50px] fill-[#eeeeee]" />
						<span className="text-[1.25vw]">Payment Received</span>
					</div>
					<div className="flex flex-col items-center">
						<FaCircle className="text-[50px] fill-[#eeeeee]" />
						<span className="text-[1.25vw]">In Production</span>
					</div>
					<div className="flex flex-col items-center">
						<FaCircle className="text-[50px] fill-[#eeeeee]" />
						<span className="text-[1.25vw]">Ready for pick-up</span>
					</div>
					<div className="flex flex-col items-center">
						<FaCircle className="text-[50px] fill-[#eeeeee]" />
						<span className="text-[1.25vw]">Finalized</span>
					</div>
				</div>
				<hr />
				<div className="w-full h-fit p-[10px]">
					<div className="flex w-full justify-around">
						<div className="text-center">
							<p className="text-[1.5vw] leading-[1.5vw]">Created on</p>
							<p className="text-[1.5vw] leading-[1.5vw]">Date</p>
						</div>
						<div className="text-center">
							<p className="text-[1.5vw] leading-[1.5vw]">Estimated Date</p>
							<p className="text-[1.5vw] leading-[1.5vw]">Date</p>
						</div>
						<div className="text-center">
							<p className="text-[1.5vw] leading-[1.5vw]">Total Price</p>
							<p className="text-[1.5vw] leading-[1.5vw]">$0000</p>
						</div>
						<div className="text-center">
							<p className="text-[1.5vw] leading-[1.5vw]">Payment Method</p>
							<p className="text-[1.5vw] leading-[1.5vw]">Crypto</p>
						</div>
						<div className="text-center">
							<p className="text-[1.5vw] leading-[1.5vw]">Planet Dropoff</p>
							<p className="text-[1.5vw] leading-[1.5vw]">Earth</p>
						</div>
					</div>
				</div>
				<hr />
				<div className="flex w-full h-full">
					<div className="w-[10%] pl-[20px]">
						<h1 className="text-[2vw] leading-[2vw]">Cart: </h1>
					</div>
					<div className="flex-1 grid grid-cols-[repeat(2,auto)] gap-[10px]">
						<ProductMiniatureOrder />
						<ProductMiniatureOrder />
						<ProductMiniatureOrder />
						<ProductMiniatureOrder />
					</div>
				</div>
			</div>
		</section>
	);
}
