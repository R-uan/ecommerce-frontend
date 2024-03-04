import { setToken, setUser } from "@/redux/slices/AuthenticationSlice";
import Cookies from "js-cookie";
import { redirect, useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import DashboardUser from "../Dashboard/DashboardUser";
import { FaUserEdit } from "react-icons/fa";
import Image from "next/image";
import { RiLogoutBoxRLine } from "react-icons/ri";

export default function DashboardMenu() {
	const dispatch = useDispatch();
	const router = useRouter();
	function Logout() {
		Cookies.remove("jwt");
		dispatch(setToken(null));
		dispatch(setUser(null));
		router.push("/");
	}

	return (
		<nav className="flex flex-col w-[20vw] h-full gap-[5px] bg-[white] px-0 py-[25px] relative">
			<button type="button" className="h-[50px] w-full hover:bg-[#eeeeee]">
				<span className="items-center gap-5 flex w-full h-full text-[1.5vw] leading-[1.5vw] text-[black] pl-5">
					<FaGithub className="text-[2vw] fill-[black]" />
					Dashboard
				</span>
			</button>
			<button type="button" className="h-[50px] w-full hover:bg-[#eeeeee]">
				<span className="items-center gap-5 flex w-full h-full text-[1.5vw] leading-[1.5vw] text-[black] pl-5">
					<FaGithub className="text-[2vw] fill-[black]" />
					My Orders
				</span>
			</button>
			<button type="button" className="h-[50px] w-full hover:bg-[#eeeeee]">
				<span className="items-center gap-5 flex w-full h-full text-[1.5vw] leading-[1.5vw] text-[black] pl-5">
					<FaGithub className="text-[2vw] fill-[black]" />
					Profile
				</span>
			</button>
			<div className="absolute bottom-0 w-full h-fit">
				<button onClick={Logout} type="button" className="h-[50px] w-full hover:bg-[#eeeeee]">
					<span className="items-center gap-5 flex w-full h-full text-[1.5vw] leading-[1.5vw] text-[black] pl-5">
						<RiLogoutBoxRLine className="text-[2vw] fill-[black]" />
						Logout
					</span>
				</button>
			</div>
		</nav>
	);
}
