import Image from "next/image";
import testimage from "../../../../public/images/product-test-image.jpg";

export default function BestSellersMini() {
	return (
		<div className="flex flex-col gap-[5px] w-[100%] p-[2px] h-fit">
			<div className="relative min-w-[25vw] w-full min-h-[25vw] overflow-hidden">
				<Image alt="img test" className="object-cover" fill={true} src={testimage} />
			</div>
			<div className="flex-1 p-[15px_0px_15px_15px]">
				<h1 className="text-[2vw] text-white leading-[2vw]">Name of the Ship</h1>
				<p className="text-[1.75vw] text-[#eeeeee] leading-[1.75vw]">$Price</p>
			</div>
		</div>
	);
}
