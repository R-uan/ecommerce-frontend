import Image from "next/image";
import testimage from "/Desktop/frontend-pepew/public/testimage.jpg";

export default function ProductMini({ data }: { data: any }) {
	return (
		<div className="single-product flex flex-col rounded-t-md bg-[#E8E8E8] w-[300px] min-h-[330px] h-fit">
			<div className=" w-full h-fit max-h-[200px] overflow-hidden rounded-t-md">
				<Image src={testimage} alt="test image"></Image>
			</div>
			<div className="h-fit ml-[5px] mt-[5px] relative">
				<span className="text-lg font-bold">{data.name}</span>
				<p className="text-sm">{data.manufacturer_name}</p>
				<p className="text-sm">{data.category}</p>
				<span>$</span>
				<span className="text-xl">{data.unit_price}</span>
				<p>***** • 300</p>
			</div>
		</div>
	);
}
