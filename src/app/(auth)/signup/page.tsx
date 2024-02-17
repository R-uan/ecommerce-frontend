"use client";
import { store } from "@/redux/store";
import styles from "@/styles/sign-in.module.scss";
import Link from "next/link";
import { useRef, useState } from "react";
import { Provider } from "react-redux";
import SignupForm from "./SignupForm";

export default function Singup() {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const rememberRef = useRef<HTMLInputElement>(null);
	const [authErrorMessage, setAuthErrorMessage] = useState<string | null>(null);

	return (
		<>
			<Provider store={store}>
				<SignupForm />
			</Provider>
		</>
	);
}
