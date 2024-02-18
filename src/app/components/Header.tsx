import Link from "next/link";
import styles from "@/styles/header.module.scss";
import { CiLogin } from "react-icons/ci";
import User from "./User";

export default function Header() {
	return (
		<header className={styles.header}>
			<Link href={"/"}>
				<div>LOGO</div>
			</Link>
			<div className={styles.menu_options}>
				<User />
			</div>
		</header>
	);
}
