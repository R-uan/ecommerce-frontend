import axios, { AxiosError } from "axios";
import AuthenticationError from "../error-handling/AuthenticationError";
import { RegistrationError } from "../error-handling/RegistrationError";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;
export async function SigninRequest(email: string, password: string) {
	try {
		console.log("Auth request");
		const endpoint = `${BACKEND_URL}/api/auth/login`;
		const body = { email, password };
		const response = await axios.post(endpoint, body);
		if (response.data) {
			return response.data.token;
		}
	} catch (error) {
		if (error instanceof AxiosError) {
			if (error.response?.status == 401) {
				throw new AuthenticationError("Invalid email or password.");
			} else {
				throw error;
			}
		} else {
			throw error;
		}
	}
}
interface ISignup {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
}

export async function SignupRequest(info: ISignup) {
	try {
		const response = await axios.post(`${BACKEND_URL}/api/auth/register`, info);
		return response.data.authToken;
	} catch (error) {
		if (error instanceof AxiosError) {
			if (error.status == 409) throw new RegistrationError(error.response?.data);
			else throw error;
		} else {
			throw error;
		}
	}
}
