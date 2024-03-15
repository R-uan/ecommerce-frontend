import IProducts from "@/interfaces/IProducts";
import Image from "next/image";
import Link from "next/link";
import testimage from "../../../../public/images/product-test-image.jpg";
import { IProductsPartial } from "@/interfaces/IProductsPartial";

export default function ProductMiniature({ data }: { data: IProductsPartial }) {
	return (
		<Link className="w-fit h-fit" href={`/catalog/${data.id}`}>
			<div className="flex flex-col w-[20vw] rounded-md min-h-[25.5vw] h-fit text-all-white">
				<div className="relative w-[20vw] h-[20vw] overflow-hidden justify-center rounded-[5px]">
					{data.availability ? null : (
						<div className="w-full h-full bg-[rgba(0,0,0,0.5)] z-50 absolute flex justify-center items-center">
							<h3 className="text-[clamp(1rem,2vw,2vw)] leading-[clamp(1rem,2vw,2vw)] font-bebas">NOT AVAILABLE</h3>
						</div>
					)}
					<span className=" text-[1.2vw] leading-[90%] absolute bg-[black] px-[7px] py-[3px] rounded-sm left-0.5 top-0.5">{data.category}</span>
					<Image fill={true} src={testimage} alt={data.name}></Image>
				</div>
				<div className="flex flex-col items-center justify-between h-[clamp(70px,5.5vw,5.5vw)] m-0.5 p-[5px] rounded-[0px_0px_5px_5px]">
					<div className="gap-[5px] w-[260px] flex items-center flex-col">
						<h3 className="text-[clamp(1rem,1.25vw,1.25vw)] break-words text-center leading-[clamp(1rem,1.25vw,1.25vw)] font-kode font-bold">{data.name}</h3>
						<h6 className="text-[clamp(0.65rem,1.2vw,1.2vw)] leading-[clamp(0.65rem,1.2vw,1.2vw)] text-center font-kode">{data.manufacturer}</h6>
						<span className="text-[clamp(1rem,1.3vw,1.3vw)] leading-[clamp(1rem,1.3vw,1.3vw)] font-kode">${data.unit_price}</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
