import BestSellersMini from "./BestSellersMini";
import styles from "./best-sellers.module.scss";

export default function BestSellers() {
	return (
		<>
			<div className="flex align-middle justify-evenly p-[2px] w-[100%] h-[720px]">
				<BestSellersMini />
				<BestSellersMini />
				<BestSellersMini />
				<BestSellersMini />
				<BestSellersMini />
				<BestSellersMini />
			</div>
		</>
	);
}
