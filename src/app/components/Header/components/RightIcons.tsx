import Link from "next/link";
import MediaQuery from "react-responsive";
import { GrCatalog } from "react-icons/gr";
import s from "../styles/header.module.scss";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

export default function RightIcons() {
	return (
		<div className={s.right_icons}>
			<MediaQuery maxWidth={700}>
				<button className={s.search_icon}>
					<FaSearch className={s.icon} />
				</button>
			</MediaQuery>
			<Link href="/catalog">
				<GrCatalog className={s.icon} />
			</Link>
			<Link href="/checkout">
				<FaShoppingCart className={s.icon} />
			</Link>
		</div>
	);
}
