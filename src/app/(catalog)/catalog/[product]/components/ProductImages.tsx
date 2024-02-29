import Image from "next/image";
import testimage from "/public/images/testvertical.jpg";

export default function ProductImages() {
	return (
		<div className="w-[45%] flex justify-center">
			<div className="relative w-[360px] h-[480px] rounded-md">
				<Image
					fill={true}
					className="object-cover rounded-md"
					alt=""
					src={testimage}></Image>
			</div>
		</div>
	);
}
