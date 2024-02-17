"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import SigninForm from "./SigninForm";

export default function Signin() {
	return (
		<>
			<Provider store={store}>
				<SigninForm />
			</Provider>
		</>
	);
}
