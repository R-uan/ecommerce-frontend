import { isAxiosError } from "axios";
import Api from "./axios-instances/PublicAxiosInstance";
import IPaginateResponse from "@/interfaces/IPaginateResponse";
import UnexpectedError from "../error-handling/UnexpectedError";
import ApiRequestError from "../error-handling/ApiRequestError";

export default class Requests {
	static async Paginate(next_page: string | null) {
		try {
			if (next_page == null) return null;
			const request = await Api.get(next_page);
			const response: IPaginateResponse = request.data;
			const { data, current_page, next_page_url, total, last_page_url, last_page } = response;
			return { data, current_page, next_page_url, total, last_page_url, last_page };
		} catch (error) {
			if (!isAxiosError(error)) throw new UnexpectedError();
			throw new ApiRequestError(error.response?.data);
		}
	}
}
