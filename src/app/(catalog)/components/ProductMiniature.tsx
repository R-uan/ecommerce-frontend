import IProducts from "@/interfaces/IProducts";
import Image from "next/image";
import Link from "next/link";
import testimage from "../../../../public/images/testvertical.jpg";

export default function ProductMiniature({ data }: { data: IProducts }) {
	const { availability } = data;
	return (
		<Link className="w-fit h-fit" href={`/catalog/${data.id}`}>
			<div className="flex flex-col w-fit rounded-md min-h-[30.5vw] h-fit">
				<div className="relative w-[270px] h-[360px] overflow-hidden justify-center rounded-[5px]">
					{availability ? null : (
						<div className="w-full h-full bg-[rgba(0,0,0,0.5)] absolute flex justify-center items-center">
							<h3 className="text-white text-[clamp(1rem,2vw,2vw)] leading-[clamp(1rem,2vw,2vw)] font-bebas">
								NOT AVAILABLE
							</h3>
						</div>
					)}
					<span className=" text-[1.2vw] leading-[90%] absolute bg-[black] text-[white] px-[7px] py-[3px] rounded-sm left-0.5 top-0.5">
						{data.category}
					</span>
					<Image width={270} height={360} src={testimage} alt={data.name}></Image>
				</div>
				<div className="flex flex-col justify-between h-[clamp(70px,5.5vw,5.5vw)] m-0.5 p-[5px] rounded-[0px_0px_5px_5px]">
					<div className="gap-[5px] w-full flex items-center flex-col">
						<h3 className="text-[clamp(1rem,1.25vw,1.25vw)] leading-[clamp(1rem,1.25vw,1.25vw)] font-kode">
							{data.name}
						</h3>
						<h6 className="text-[clamp(0.65rem,1.2vw,1.2vw)] leading-[clamp(0.65rem,1.2vw,1.2vw)] font-kode">
							{data.manufacturer_name}
						</h6>
						<span className="text-[clamp(1rem,1.3vw,1.3vw)] leading-[clamp(1rem,1.3vw,1.3vw)] font-kode">
							${data.unit_price}
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
