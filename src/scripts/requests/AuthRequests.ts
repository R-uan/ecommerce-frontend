import axios, { AxiosError } from "axios";
import { IRegisterUser } from "@/interfaces/IAuth";
import api from "./axios-instances/PublicAxiosInstance";
import AuthenticationError from "../error-handling/AuthenticationError";
import { RegistrationError } from "../error-handling/RegistrationError";

export default class AuthRequests {
	static async Login(email: string, password: string) {
		try {
			const request_body = { email, password };
			const response = await api.post("/auth/login", request_body);
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				if (error.response?.status == 401) {
					throw new AuthenticationError("Invalid email or password.");
				} else throw new AuthenticationError("Failed to authenticate.");
			} else throw error;
		}
	}

	static async Register(info: IRegisterUser) {
		try {
			const response = await api.post("/auth/register", info);
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				if (error.status == 409) throw new RegistrationError(error.response?.data);
				else throw new RegistrationError("Failed to register user.");
			} else {
				throw error;
			}
		}
	}
}
