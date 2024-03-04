"use client";
import Image from "next/image";
import { FaUserEdit } from "react-icons/fa";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/slices/AuthenticationSlice";
import { redirect } from "next/navigation";
import { RootState } from "@/redux/store";

export default function DashboardUser() {
	const dispatch = useDispatch();
	const user = useSelector((s: RootState) => s.authentication).user;

	useEffect(() => {
		const token = Cookies.get("jwt");
		if (token) {
			const user = jwtDecode(token).user;
			user ? dispatch(setUser(user)) : redirect("/signin");
		} else {
			redirect("/signin");
		}
	}, []);
	return (
		<section className="flex items-center gap-[30px] w-[35vw] h-[17vh] bg-[white] pl-[30px] pr-2.5 py-2.5 rounded-md">
			<div>
				<Image
					className="w-[100px] h-[100px] bg-[black] rounded-[100%]"
					src={""}
					alt="profile-picture"></Image>
			</div>
			<div className="min-w-[250px]">
				<h3 className="text-[2.5vw] leading-[2.5vw]">{`${user?.first_name} ${user?.last_name}`}</h3>
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
