import IUser from "@/interfaces/IUser";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GiRingedPlanet } from "react-icons/gi";
import s from "./styles/header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setUser } from "@/redux/slices/AuthenticationSlice";
export default function User() {
	const router = useRouter();
	const dispatch = useDispatch();
	const state = useSelector((s: RootState) => s.authentication);

	function Logout() {
		dispatch(setUser(null));
		Cookies.remove("jwt");
		router.refresh();
	}

	useEffect(() => {
		if (!state.authenticated) {
			const token = Cookies.get("jwt");
			if (!token) return;
			const decode_token: { user: IUser } = jwtDecode(token);
			if (decode_token.user) dispatch(setUser(decode_token.user));
		}
	}, [state.user]);

	return (
		<div className={s.header_user}>
			<GiRingedPlanet className={s.icon} />
			<div>
				<p>{!state.authenticated ? "Welcome to Gemini" : `Hello, ${state.user?.first_name}`}</p>
				<div>
					{!state.authenticated ? (
						<>
							<Link href={"/login"} className="h-fit">
								<span>Login</span>
							</Link>
							<span>•</span>
							<Link href={"/register"} className="h-fit">
								<span>Register</span>
							</Link>
						</>
					) : (
						<>
							<Link href={"/my-account"} className="h-fit">
								<span>My Account</span>
							</Link>
							<span>•</span>
							<button onClick={() => Logout()} className="h-fit">
								<span>Logout</span>
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
