import IPaginateResponse from "@/interfaces/IPaginateResponse";
import { isAxiosError } from "axios";
import api from "./axios-instances/PublicAxiosInstance";
import UnexpectedError from "../error-handling/UnexpectedError";
import ApiRequestError from "../error-handling/ApiRequestError";

export default class ManufacturerRequests {
	static async Products(manufacturer: string) {
		try {
			const request = await api.get(`/manufacturers/products/${manufacturer}`);
			const response: IPaginateResponse = request.data;
			const { data, total, current_page, last_page, last_page_url, next_page_url } = response;
			return { data, total, current_page, last_page, last_page_url, next_page_url };
		} catch (error) {
			if (!isAxiosError(error)) throw new UnexpectedError();
			throw new ApiRequestError(error.response?.data);
		}
	}
}
