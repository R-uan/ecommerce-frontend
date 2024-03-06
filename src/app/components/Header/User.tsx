import IUser from "@/interfaces/IUser";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function User() {
	const router = useRouter();
	const [user, setUser] = useState<IUser | null>(null);
	const [authenticated, setAuthenticationStatus] = useState<boolean>(false);
	function Authentication() {
		const token = Cookies.get("jwt");
		if (token) {
			const user = jwtDecode(token).user;
			if (user) {
				setAuthenticationStatus(true);
				setUser(user);
			}
		}
	}

	function Logout() {
		setUser(null);
		setAuthenticationStatus(false);
		Cookies.remove("jwt");
		redirect("/");
	}

	useEffect(() => {
		if (!user) {
			Authentication();
		}
	});

	return (
		<>
			<div className="flex flex-row items-center w-[55%] h-[80%] gap-[5px]">
				<div className="flex flex-col">
					<p className="text-[1.5vw] leading-[1.5vw]">Hello{!authenticated ? "" : `, ${user?.first_name}`}</p>
					<div className="flex gap-[7px]">
						{!authenticated ? (
							<>
								<Link href={"/signin"} className="h-fit">
									<span className="text-[1.5vw] leading-[1.5vw]">Sign in</span>
								</Link>
								<span>•</span>
								<Link href={"/signup"} className="h-fit">
									<span className="text-[1.5vw] leading-[1.5vw]">Sign up</span>
								</Link>
							</>
						) : (
							<>
								<Link href={"/my-account"} className="h-fit">
									<span className="text-[1.5vw] leading-[1.5vw]">My Account</span>
								</Link>
								<span>•</span>
								<button onClick={() => Logout()} className="h-fit">
									<span className="text-[1.5vw] leading-[1.5vw]">Logout</span>
								</button>
							</>
						)}
					</div>
				</div>
				{/* {!showingMenu ? null : (
					<>
						<div className={styles.options_menu}>
							<form action="POST" className="flex flex-col w-full gap-[10px]">
								<input
									className="w-full pl-[5px] rounded-sm h-[30px]"
									type="text"
									placeholder="Email"
								/>
								<input
									className="w-full pl-[5px] rounded-sm h-[30px]"
									type="text"
									placeholder="Password"
								/>
							</form>
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
				)} */}
			</div>
		</>
	);
}
