import api from "./AxiosInstance";
import { RefreshToken } from "../util";
import { AxiosRequestConfig } from "axios";
import AuthenticationError from "../error-handling/AuthenticationError";
import UnexpectedError from "../error-handling/UnexpectedError";

export async function RequestUserOrders(user_token: string) {
	try {
		if (!user_token) throw new AuthenticationError("No Token");
		const config: AxiosRequestConfig = { headers: { Authorization: `Bearer ${user_token}` } };
		const request = await api.get("/orders", config);
		return request.data ?? new UnexpectedError();
	} catch (error) {
		console.log(error);
	}
}
