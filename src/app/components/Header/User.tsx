import Link from "next/link";
import { useState } from "react";
import { FaUser } from "react-icons/fa6";
import styles from "./styles/user.module.scss";
export default function User() {
	const [showingMenu, setShowingStatus] = useState(false);
	function prevent(e: React.UIEvent) {
		e.preventDefault();
	}
	return (
		<>
			<div className={styles.user_menu}>
				<button onClick={() => setShowingStatus(!showingMenu)} className={styles.user_icon}>
					<FaUser size={25} />
				</button>
				{!showingMenu ? null : (
					<>
						<div className={styles.options_menu}>
							<button>
								<Link href={"/signin"}>Signin</Link>
							</button>
							<button>
								<Link href={"/signup"}>Signup</Link>
							</button>
						</div>
						<div
							onScroll={prevent}
							onClick={() => setShowingStatus(!showingMenu)}
							className={styles.options_menu_outer}></div>
					</>
				)}
			</div>
		</>
	);
}
