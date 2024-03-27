"use client";
import Image from "next/image";
import { FaUserEdit } from "react-icons/fa";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/slices/AuthenticationSlice";
import { redirect, useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import IUser from "@/interfaces/IUser";
import s from "../page.module.scss";
export default function DashboardUser() {
	const dispatch = useDispatch();
	const router = useRouter();
	const user = useSelector((s: RootState) => s.authentication).user;

	useEffect(() => {
		async function Default() {
			const token = Cookies.get("jwt");
			if (token) {
				const decoded_token: { user: IUser } = jwtDecode(token);
				decoded_token.user ? dispatch(setUser(decoded_token.user)) : redirect("/signin");
			} else {
				router.push("/login");
			}
		}
		Default();
	}, [dispatch]);

	return (
		<section className={s.dashboard_user}>
			<div>
				<Image className={s.user_profile_picture} src={""} alt="profile-picture"></Image>
			</div>
			<div>
				{!user ? <div className="absolute top-0 left-0 w-full h-full bg-[white] rounded-md z-50" /> : null}
				<span>{`${user?.first_name} ${user?.last_name}`}</span>
				<span className="text-[1.5vw] leading-[1.5vw]">{`${user?.email}`}</span>
			</div>
			<div className="ml-[20px] flex items-center h-full">
				<button>
					<FaUserEdit size={40} fill="black" />
				</button>
			</div>
		</section>
	);
}
