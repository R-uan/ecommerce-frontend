import Image from "next/image";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { OrderItem } from "@/interfaces/IOrder";

// TODO Convert styles to modules
export default function ProductMiniatureOrder({ product }: { product: OrderItem }) {
	const state = useSelector((s: RootState) => s.expand_order);

	return (
		<div className="w-[370px] gap-[10px] flex h-fit bg-[#eeeeee] p-[2px] pr-[15px] rounded-md">
			<div className="flex w-[150px] h-[200px] bg-white rounded-bl-md rounded-tl-md">
				<Image alt="product-miniature" src={""} />
			</div>
			<div className="flex flex-1 flex-col pt-[10px] gap-[7px]">
				<div>
					<h1 className="text-[1.5vw] leading-[1.5vw] font-bold break-words">{product.products.name}</h1>
					<h3 className="text-[1.5vw] leading-[1.5vw]">{product.products.manufacturer.name}</h3>
				</div>
				<div className="flex flex-col gap-[5px]">
					<div>
						<p className="text-[1.25vw] leading-[1.25vw]">{product.products.category}</p>
						<p className="text-[1.25vw] leading-[1.25vw]">{product.amount}un</p>
					</div>
					<div>
						<p className="text-[1.25vw] leading-[1.25vw]">${product.unit_price} unit</p>
						<p className="text-[1.25vw] leading-[1.25vw]">${product.total_price} total</p>
					</div>
				</div>
			</div>
		</div>
	);
}
