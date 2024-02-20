import Link from "next/link";
import HeaderOptions from "./HeaderOptions";
import User from "./User";
import styles from "./styles/header.module.scss";
import SearchProduct from "./SearchProduct";
import ProductCart from "./ProductCart";

export default function Header() {
	return (
		<header className={styles.header}>
			<Link href={"/"}>
				<div>LOGO</div>
			</Link>
			<HeaderOptions />
			<div className="flex gap-[15px]">
				<SearchProduct />
				<ProductCart />
				<User />
			</div>
		</header>
	);
}
