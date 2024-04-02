import { FaGithub } from "react-icons/fa6";
import s from "./nav-menu.module.scss";
export default function NavMenu() {
	return (
		<div className={s.nav_menu}>
			<div>
				<FaGithub className={s.icon} fill="black" />
				<span className="text-[1.5rem]">Github</span>
			</div>
			<div className="flex h-fit flex-col w-fit items-center">
				<FaGithub className={s.icon} fill="black" />
				<span className="text-[1.5rem]">Favourites</span>
			</div>
			<div className="flex h-fit flex-col w-fit items-center">
				<FaGithub className={s.icon} fill="black" />
				<span className="text-[1.5rem]">My Orders</span>
			</div>
			<div className="flex h-fit flex-col w-fit items-center">
				<FaGithub className={s.icon} fill="black" />
				<span className="text-[1.5rem]">Logout</span>
			</div>
		</div>
	);
}
