"use client";
import { RootState } from "@/redux/store";
import AuthenticationError from "@/scripts/error-handling/AuthenticationError";
import { SigninRequest } from "@/scripts/requests/AuthRequests";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../sign.module.scss";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function SigninForm() {
	const dispatch = useDispatch();
	const user = useSelector((s: RootState) => s.authentication);
	const router = useRouter();
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const rememberRef = useRef<HTMLInputElement>(null);
	const [authenticating, setAuthenticatingStatus] = useState(false);
	const [authErrorMessage, setAuthErrorMessage] = useState<string | null>(null);

	async function HandleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		try {
			setAuthErrorMessage(null);
			setAuthenticatingStatus(true);
			const email = emailRef.current?.value;
			const password = passwordRef.current?.value;
			const remember = rememberRef.current?.checked;
			if (email && password) {
				const authentication = await SigninRequest(email, password);
				if (authentication) {
					Cookies.set("jwt", authentication, { expires: 7 });
					setAuthenticatingStatus(false);
				}
				router.push("/");
			}
		} catch (error) {
			if (error instanceof AuthenticationError) {
				setAuthenticatingStatus(false);
				setAuthErrorMessage(error.message);
			}
		}
	}

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
				<Link className="hover:text-[#7743db] font-smooch text-focus-black text-[1.25rem]" href={"/signup"}>
					Sign up
				</Link>
			</div>
		</>
	);
}
