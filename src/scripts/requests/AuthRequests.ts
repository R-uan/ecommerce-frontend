import axios, { AxiosError } from "axios";
import AuthenticationError from "../error-handling/AuthenticationError";
import { RegistrationError } from "../error-handling/RegistrationError";
import api from "./AxiosInstance";

interface ISignup {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
}

export async function SigninRequest(email: string, password: string) {
	try {
		console.log("Auth request");
		const body = { email, password };
		const response = await api.post("/auth/login", body);
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

export async function SignupRequest(info: ISignup) {
	try {
		const response = await api.post("/auth/register", info);
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
