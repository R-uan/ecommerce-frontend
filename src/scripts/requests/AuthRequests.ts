import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { IRegisterUser } from "@/interfaces/IAuth";
import Cookies from "js-cookie";
import api from "./axios-instances/PublicAxiosInstance";
import authenticated from "./axios-instances/AuthenticatedAxiosInstance";
import AuthenticationError from "../error-handling/AuthenticationError";
import { RegistrationError } from "../error-handling/RegistrationError";
import { jwtDecode } from "jwt-decode";

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

	static async RefreshToken(user_token: string) {
		try {
			const decodedToken = jwtDecode(user_token);
			const currentTime = Date.now() / 1000;

			if (!decodedToken || !decodedToken.exp) throw new AuthenticationError("No valid token was provided.");
			if (decodedToken.exp && decodedToken.exp > currentTime) return null;

			const config: AxiosRequestConfig = { headers: { Authorization: `Bearer ${user_token}` } };
			const refreshRequest = await authenticated.get("/auth/refresh", config);
			if (refreshRequest.status != 200) throw Error("Unable to refresh token");

			return refreshRequest.data;
		} catch (error) {
			// TODO Error Handling
		}
	}
}
