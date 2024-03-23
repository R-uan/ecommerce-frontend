"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import SignupForm from "./RegisterForm";

export default function Singup() {
	return (
		<Provider store={store}>
			<SignupForm />
		</Provider>
	);
}
