"use client";
import AuthenticationError from "@/scripts/error-handling/AuthenticationError";
import AuthRequests from "@/scripts/requests/AuthRequests";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "../auth.module.scss";

export default function LoginForm() {
	const router = useRouter();
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const rememberRef = useRef<HTMLInputElement>(null);
	const [authenticating, setAuthenticatingStatus] = useState(false);
	const [authErrorMessage, setAuthErrorMessage] = useState<string | null>(null);

	async function HandleSubmit(event: FormEvent<HTMLFormElement>) {
		try {
			event.preventDefault();
			setAuthErrorMessage(null);
			setAuthenticatingStatus(true);
			const email = emailRef.current?.value;
			const password = passwordRef.current?.value;
			const remember = rememberRef.current?.checked;
			if (email && password) {
				const auth_token = await AuthRequests.Login(email, password);
				remember ? Cookies.set("jwt", auth_token, { expires: 7 }) : sessionStorage.setItem("jwt", auth_token);
				setAuthenticatingStatus(false);
				router.push("/");
			} else setAuthErrorMessage("Please provide your credentials.");
		} catch (error) {
			if (error instanceof AuthenticationError) setAuthErrorMessage(error.message);
			else setAuthErrorMessage("Unable to authenticate. Try again later");
			setAuthenticatingStatus(false);
		}
	}

	useEffect(() => {
		const token = Cookies.get("jwt");
		if (token) router.push("/");
	}, []);

	return (
		<>
			<form action="POST" onSubmit={HandleSubmit} className={styles.form}>
				<span>Sign in to your Gemini account</span>
				<div className={styles.form_field}>
					<label htmlFor="email">Email</label>
					<input ref={emailRef} name="email" type="email" required disabled={authenticating} />
				</div>
				<div className={styles.form_field}>
					<label htmlFor="password">Password</label>
					<input ref={passwordRef} name="password" type="password" required disabled={authenticating} />
					<div className={styles.auth_message}>
						<span>{authErrorMessage}</span>
					</div>
				</div>
				<div className={styles.form_options}>
					<label htmlFor="remember">
						<input ref={rememberRef} type="checkbox" name="Remember-me" id="remember" />
						Remember me
					</label>
					<button>Forgot password ?</button>
				</div>
				<div className={styles.submit_form}>
					<button disabled={authenticating} type="submit">
						{authenticating ? <AiOutlineLoading3Quarters className="animate-spin" fill="black" /> : "Sign up"}
					</button>
				</div>
			</form>
			<div className="gap-[5px] flex absolute justify-center items-center h-[30px] bg-[#f1f6f9] w-full bottom-0 text-[1.25rem]">
				<h3 className="text-focus-black font-smooch">New user ?</h3>
				<Link className="hover:text-[#7743db] font-smooch text-focus-black text-[1.25rem]" href={"/register"}>
					Register
				</Link>
			</div>
		</>
	);
}
