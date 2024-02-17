"use client";
import { SigninRequest } from "@/scripts/requests/AuthRequests";
import AuthenticationError from "@/scripts/error-handling/AuthenticationError";
import { setToken } from "@/redux/slices/AuthenticationSlice";
import styles from "@/styles/sign-in.module.scss";
import Cookies from "js-cookie";
import Link from "next/link";
import { RedirectType, permanentRedirect, useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";

export default function SigninForm() {
	const dispatch = useDispatch();
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
					console.log(authentication);
					dispatch(setToken(authentication));
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
					<input ref={emailRef} name="email" type="email" required />
				</div>
				<div className={styles.form_field}>
					<label htmlFor="password">Password</label>
					<input ref={passwordRef} name="password" type="password" required />
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
					<input type="submit" value="Sign in" disabled={authenticating} />
				</div>
			</form>
			<div className={styles.sign_up}>
				<h3>New user ?</h3>
				<Link className={styles.signup_link} href={"/signup"}>
					Sign up
				</Link>
			</div>
		</>
	);
}
