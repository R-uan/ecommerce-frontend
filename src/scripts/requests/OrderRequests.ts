import IOrder from "@/interfaces/IOrder";
import { isAxiosError } from "axios";
import ApiRequestError from "../error-handling/ApiRequestError";
import UnexpectedError from "../error-handling/UnexpectedError";
import api from "./axios-instances/AuthenticatedAxiosInstance";

export async function RequestUserOrders() {
	try {
		const request = await api.get("/orders");
		return request.data ?? new UnexpectedError();
	} catch (error) {
		if (isAxiosError(error)) throw new ApiRequestError(error.response?.data);
		else throw error;
	}
}

export async function RequestSingleOrder(order_id: string) {
	try {
		const request = await api.get(`/orders/${order_id}`);
		const data: IOrder = request.data;
		return data;
	} catch (error) {
		if (isAxiosError(error)) throw new ApiRequestError(error.message);
		else throw error;
	}
}
