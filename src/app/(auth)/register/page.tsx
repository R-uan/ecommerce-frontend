import { store } from "@/redux/store";
import { Metadata } from "next";
import { Provider } from "react-redux";
import SignupForm from "./RegisterForm";
export const metadata: Metadata = {
	title: "Register to Gemini",
};

export default function Singup() {
	return (
		<Provider store={store}>
			<SignupForm />
		</Provider>
	);
}
