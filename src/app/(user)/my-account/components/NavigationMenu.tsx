import Cookies from "js-cookie";
import s from "../page.module.scss";
import { useDispatch } from "react-redux";
import { FaGithub } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { setToken, setUser } from "@/redux/slices/AuthenticationSlice";

export default function DashboardMenu() {
	const router = useRouter();
	const dispatch = useDispatch();

	function Logout() {
		Cookies.remove("jwt");
		dispatch(setToken(null));
		dispatch(setUser(null));
		router.push("/");
	}

	return (
		<nav className={s.navigation_menu}>
			<button type="button">
				<span>
					<FaGithub className="text-[2vw] fill-[black]" />
					Dashboard
				</span>
			</button>
			<button type="button">
				<span>
					<FaGithub className="text-[2vw] fill-[black]" />
					My Orders
				</span>
			</button>
			<button type="button">
				<span>
					<FaGithub className="text-[2vw] fill-[black]" />
					Profile
				</span>
			</button>
			<button type="button">
				<span>
					<FaGithub className="text-[2vw] fill-[black]" />
					Favourites
				</span>
			</button>
			<div className="absolute bottom-[2px] w-full h-fit">
				<button onClick={Logout} type="button">
					<span>
						<RiLogoutBoxRLine className="text-[2vw] fill-[black]" />
						Logout
					</span>
				</button>
			</div>
		</nav>
	);
}
