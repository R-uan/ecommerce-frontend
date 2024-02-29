import { FaRegStar, FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

export default function Rating({ size = 20, fill = "white" }: { size?: number; fill?: string }) {
	const rating = 2.5;
	const ratingFloor = Math.floor(rating);
	let stars2 = [];
	for (let i = 0; i < 5; i++) {
		if (i < ratingFloor) {
			stars2.push(<FaStar fill={fill} size={size} />);
		} else if (i == ratingFloor) {
			if (rating - ratingFloor > 0) {
				stars2.push(<FaStarHalfAlt fill={fill} size={size} />);
			} else {
				stars2.push(<FaRegStar fill={fill} size={size} />);
			}
		} else {
			stars2.push(<FaRegStar fill={fill} size={size} />);
		}
	}

	return (
		<>
			<div className="flex mb-[5px]">
				{stars2.map((element, index) => {
					return <span key={index}>{element}</span>;
				})}
			</div>
		</>
	);
}
