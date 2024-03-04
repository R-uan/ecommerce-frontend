import { jwtDecode } from "jwt-decode";
import AuthenticationError from "./error-handling/AuthenticationError";
import axios, { AxiosRequestConfig } from "axios";

config();
import { config } from "dotenv";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;

export async function RefreshToken(user_token: string) {
	try {
		const decodedToken = jwtDecode(user_token);
		const currentTime = Date.now() / 1000;

		if (!decodedToken || !decodedToken.exp) throw new AuthenticationError("No valid token was provided.");
		if (decodedToken.exp && decodedToken.exp > currentTime) return null;

		const config: AxiosRequestConfig = { headers: { Authorization: `Bearer ${user_token}` } };
		const refreshRequest = await axios.get(`${BACKEND_URL}/auth/refresh`, config);
		if (refreshRequest.status != 200) throw Error("Unable to refresh token");

		return refreshRequest.data;
	} catch (error) {
		// Not implemented yet
		console.log(error);
	}
}
