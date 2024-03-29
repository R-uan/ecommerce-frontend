import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect } from "react";
import IUser from "@/interfaces/IUser";
import { jwtDecode } from "jwt-decode";
import { RootState } from "@/redux/store";
import s from "../styles/user.module.scss";
import { useRouter } from "next/navigation";
import { GiRingedPlanet } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
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
		<div className={s.user}>
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
