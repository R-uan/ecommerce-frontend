"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import LoginForm from "./LoginForm";

export default function Signin() {
	return (
		<Provider store={store}>
			<LoginForm />
		</Provider>
	);
}
