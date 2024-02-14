import Link from "next/link";
import styles from "@/styles/header.module.scss";
import { CiLogin } from "react-icons/ci";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.menu_options}>
				<ul className="flex flex-row gap-5 mr-[5vw]">
					<li>
						<CiLogin />
						<Link href={"/"}>Sign in</Link>
					</li>
					<li>
						<Link href={"/"}>Sign up</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
