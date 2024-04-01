import Image from "next/image";
import testimage from "/public/images/testvertical.jpg";

export default function ProductImages() {
	return (
		<div className="w-fit flex justify-center">
			<div className="relative w-[33vw] h-[33vw] rounded-md">
				<Image fill={true} className="object-cover rounded-md" alt="" src={testimage}></Image>
			</div>
		</div>
	);
}
