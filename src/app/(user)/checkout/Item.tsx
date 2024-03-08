"use client";
import Image from "next/image";
import testimage from "../../../../public/images/product-test-image.jpg";
import { FaTrashCan } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Item() {
	const [productAmount, setAmount] = useState(1);
	const a = useSelector((s: RootState) => s.authentication.user);
	return (
		<div className="flex relative gap-[5px] flex-row w-full h-[8vw]">
			<div className="relative w-[8vw] h-[8vw] bg-[#eeeeee]">
				<Image src={testimage} alt="" fill={true} />
			</div>
			<div className="pt-[5px] w-[50%]">
				<h1 className="text-[2.5vw] leading-[2.5vw] font-medium">{a?.email}</h1>
				<p className="text-[1.75vw] leading-[1.75vw]">Manufacturer</p>
				<p className="text-[1.35vw] leading-[1.35vw]">Category</p>
			</div>
			<div className="flex items-center flex-1 justify-between p-[5px_50px_5px_5px]">
				<div className="flex flex-col justify-center">
					<div className="flex flex-col items-center justify-center">
						<label htmlFor="amount" className="text-[1.25vw] leading-[1.25vw] text-center">
							Units
						</label>
						<input
							id="amount"
							type="number"
							min={1}
							max={99}
							defaultValue={productAmount}
							onChange={(e) => {
								setAmount(parseInt(e.target.value));
							}}
							className="w-[50px] text-[1.5vw] text-center bg-transparent font-bold border-[1px] border-black"
						/>
					</div>
				</div>
				<div className="flex flex-col items-end">
					<label htmlFor="price" className="text-[1.25vw] leading-[1.25vw]">
						Total Price
					</label>
					<p id="price" className="text-[1.5vw] leading-[1.5vw]">
						$50000
					</p>
					<span className="text-[0.95vw] leading-[0.95vw]">taxes included</span>
				</div>
			</div>
			<button className="flex justify-center items-center right-0 h-full w-[2vw] mr-[20px] rounded-tr-md rounded-br-md">
				<FaTrashCan />
			</button>
		</div>
	);
}
