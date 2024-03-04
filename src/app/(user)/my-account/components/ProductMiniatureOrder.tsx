import Image from "next/image";

export default function ProductMiniatureOrder() {
	return (
		<div className="w-fit gap-[10px] flex h-fit bg-[#eeeeee] p-[2px] pr-[15px] rounded-md">
			<div className="flex  w-[150px] h-[200px] bg-white rounded-bl-md rounded-tl-md">
				<Image alt="product-miniature" src={""} />
			</div>
			<div className="flex flex-1 flex-col pt-[10px] gap-[15px]">
				<div>
					<h1 className="text-[2.25vw] leading-[2.25vw] font-bold break-words">Very very very big titleee bigger</h1>
					<h3 className="text-[1.5vw] leading-[1.5vw]">Manufacturer</h3>
				</div>
				<div className="flex flex-row gap-[50px]">
					<div>
						<p className="text-[1.7vw] leading-[1.7vw]">Category</p>
						<p className="text-[1.7vw] leading-[1.7vw]">Quantity un</p>
					</div>
					<div>
						<p className="text-[1.7vw] leading-[1.7vw]">$Unit Price</p>
						<p className="text-[1.7vw] leading-[1.7vw]">Total Price</p>
					</div>
				</div>
			</div>
		</div>
	);
}
