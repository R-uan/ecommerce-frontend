import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { config } from "dotenv";
import Cookies from "js-cookie";
import AuthenticationError from "../error-handling/AuthenticationError";
config();

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;

const instance = axios.create({ baseURL: BACKEND_URL });

instance.interceptors.response.use(
	function (response) {
		console.log("Middlware sucess");
		return response;
	},
	async function (error: AxiosError) {
		console.log("Token Expired");
		if (error.response && error.response.status === 401 && error.response.data === "Expired Token.") {
			const expired_token = Cookies.get("jwt");
			const config = { headers: { Authorization: `Bearer ${expired_token}` } };
			const refreshed_token = (await instance.get("/auth/refresh", config)).data;
			if (refreshed_token && error.config) {
				Cookies.set("jwt", refreshed_token);
				error.config.headers.Authorization = `Bearer ${refreshed_token}`;
				return instance.request(error.config);
			} else return Promise.reject(new AuthenticationError("Error During Token Renovation"));
		}
	}
);

export default instance;
