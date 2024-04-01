"use client";
import { IRegisterUser } from "@/interfaces/IAuth";
import { RegistrationError } from "@/scripts/error-handling/RegistrationError";
import AuthRequests from "@/scripts/requests/AuthRequests";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import styles from "../auth.module.scss";

export default function RegisterForm() {
	const emailRef = useRef<HTMLInputElement>(null);
	const fNameRef = useRef<HTMLInputElement>(null);
	const lNameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const [registering, setRegisteringStatus] = useState<boolean>(false);
	const [authErrorMessage, setAuthErrorMessage] = useState<string | null>(null);

	async function HandleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setRegisteringStatus(true);
		const user_information: IRegisterUser = {
			first_name: fNameRef.current!.value,
			last_name: lNameRef.current!.value,
			email: emailRef.current!.value,
			password: passwordRef.current!.value,
		};

		try {
			const registration = await AuthRequests.Register(user_information);
			sessionStorage.setItem("jwt", registration);
			redirect("/");
		} catch (error) {
			error instanceof RegistrationError
				? setAuthErrorMessage(error.message)
				: setAuthErrorMessage("Unable to register. Try later.");
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
					<input ref={passwordRef} name="password" type="password" required minLength={8} />
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
				<Link className="hover:text-[#7743db] text-[1.25rem]" href={"/login"}>
					Login
				</Link>
			</div>
		</>
	);
}
