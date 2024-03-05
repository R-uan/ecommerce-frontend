import api from "./AxiosInstance";
import { RefreshToken } from "../util";
import Cookies from "js-cookie";
import { AxiosRequestConfig, isAxiosError } from "axios";
import AuthenticationError from "../error-handling/AuthenticationError";
import UnexpectedError from "../error-handling/UnexpectedError";
import IOrder from "@/interfaces/IOrder";
import FetchingError from "../error-handling/FetchingError";

export async function RequestUserOrders() {
	try {
		const request = await api.get("/orders");
		return request.data ?? new UnexpectedError();
	} catch (error) {
		if (isAxiosError(error)) throw new FetchingError(error.message);
		else throw error;
	}
}

export async function RequestSingleOrder(order_id: string) {
	try {
		const request = await api.get(`/orders/${order_id}`);
		const data: IOrder = request.data;
		return data;
	} catch (error) {
		if (isAxiosError(error)) throw new FetchingError(error.message);
		else throw error;
	}
}
