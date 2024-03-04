"use client";
import Link from "next/link";
import styles from "../sign.module.scss";
import { useDispatch } from "react-redux";
import { redirect } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { setToken } from "@/redux/slices/AuthenticationSlice";
import { SignupRequest } from "@/scripts/requests/AuthRequests";
import { RegistrationError } from "@/scripts/error-handling/RegistrationError";

export default function SignupForm() {
	const dispatch = useDispatch();
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const fNameRef = useRef<HTMLInputElement>(null);
	const lNameRef = useRef<HTMLInputElement>(null);
	const [registering, setRegisteringStatus] = useState<boolean>(false);
	const [authErrorMessage, setAuthErrorMessage] = useState<string | null>(null);
	async function HandleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setRegisteringStatus(true);
		try {
			const data = {
				first_name: fNameRef.current!.value,
				last_name: lNameRef.current!.value,
				email: emailRef.current!.value,
				password: passwordRef.current!.value,
			};
			const registration = await SignupRequest(data);
			if (registration) {
				dispatch(setToken(registration));
				redirect("/");
			}
		} catch (error) {
			if (error instanceof RegistrationError) {
				setAuthErrorMessage(error.message);
			} else {
				setAuthErrorMessage("Unable to register. Try later.");
			}
			setRegisteringStatus(false);
		}
	}

	return (
		<>
			<form onSubmit={HandleSubmit} action="POST" className={styles.form}>
				<span>Sign in to your Gemini account</span>
				<div className={styles.form_field}>
					<label htmlFor="first_name">First Name</label>
					<input ref={fNameRef} type="text" name="first_name" required />
				</div>
				<div className={styles.form_field}>
					<label htmlFor="last_name">Last Name</label>
					<input ref={lNameRef} type="text" name="last_name" required />
				</div>
				<div className={styles.form_field}>
					<label htmlFor="email">Email</label>
					<input ref={emailRef} name="email" type="email" required />
				</div>
				<div className={styles.form_field}>
					<label htmlFor="password">Password</label>
					<input
						ref={passwordRef}
						name="password"
						type="password"
						required
						minLength={8}
					/>
					<div className={styles.auth_message}>
						<span>{authErrorMessage}</span>
					</div>
				</div>
				<div className={styles.submit_form}>
					<input type="submit" value="Sign up" disabled={registering} />
				</div>
			</form>
			<div className="gap-[5px] flex text-all-black absolute justify-center items-center h-[30px] bg-[#f1f6f9] w-full bottom-0 text-[1.25rem]">
				<h3>Already registered ?</h3>
				<Link className="hover:text-[#7743db] text-[1.25rem]" href={"/signin"}>
					Sign in
				</Link>
			</div>
		</>
	);
}
