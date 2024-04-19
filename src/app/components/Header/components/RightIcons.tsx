import Link from "next/link";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { GrCatalog } from "react-icons/gr";
import MediaQuery from "react-responsive";

export default function RightIcons() {
	return (
		<div className="right_icons">
			<MediaQuery maxWidth={700}>
				<button>
					<FaSearch className="icon" />
				</button>
			</MediaQuery>
			<Link href="/catalog">
				<GrCatalog className="icon" />
			</Link>
			<Link href="/checkout">
				<FaShoppingCart className="icon" />
			</Link>
		</div>
	);
}
