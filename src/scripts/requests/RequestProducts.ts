import { ICart } from "@/interfaces/ICart";
import { QueryParams, QueryType } from "@/interfaces/ICatalogQueries";
import { IPlanetDestination } from "@/interfaces/IOrder";
import IPaginateResponse from "@/interfaces/IPaginateResponse";
import { IProduct } from "@/interfaces/IProduct";
import { isAxiosError } from "axios";
import ApiRequestError from "../error-handling/ApiRequestError";
import UnexpectedError from "../error-handling/UnexpectedError";
import Util from "../utils/Query";
import api from "./axios-instances/PublicAxiosInstance";
import Requests from "./Requests";

export class RequestProducts extends Requests {
	static async All() {
		try {
			const request = await api.get("/products/miniatures");
			const response: IPaginateResponse = request.data;
			const { data, total, current_page, last_page, next_page_url } = response;
			return { data, total, current_page, last_page, next_page_url };
		} catch (error) {
			console.log(error);
			if (isAxiosError(error)) throw new Error(error.message);
			else throw new Error("Unexpected Error.");
		}
	}

	static async One(id: string) {
		try {
			const request = await api.get(`/products/${id}`);
			const response: IProduct = request.data;
			return response;
		} catch (error) {
			if (!isAxiosError(error)) throw new UnexpectedError();
			throw new ApiRequestError(error.response?.data);
		}
	}

	static async RequestDestinations() {
		try {
			const request = await api.get("/destinations");
			const response: IPlanetDestination[] = request.data;
			return response;
		} catch (error) {
			if (isAxiosError(error)) throw new ApiRequestError(error.response?.data);
			throw new UnexpectedError();
		}
	}

	static async RequestBySlug(slug: string) {
		try {
			const request = await api.get(`/products/${slug}`);
			const response: IProduct = request.data;
			return response;
		} catch (error) {
			if (!isAxiosError(error)) throw new UnexpectedError();
			throw new ApiRequestError(error.response?.data);
		}
	}

	static async Miniatures(product_ids: number[]) {
		try {
			const request = await api.post("/products/miniatures", { products: product_ids });
			const data = request.data;
			return data;
		} catch (error) {
			if (!isAxiosError(error)) throw new UnexpectedError();
			throw new ApiRequestError(error.response?.data);
		}
	}

	static async QueryHandler(params: QueryParams, type: QueryType) {
		try {
			console.log(params);
			console.log(type);

			const query = Util.QueryBuilderApi(params, type);
			if (type === QueryType.Manufacturer) {
				const endpoint = `/manufacturers/${params.name}/search?${query}`;
				const request = await api.get(endpoint);
				const response: IPaginateResponse = request.data;
				const { data, total, current_page, last_page, last_page_url, next_page_url } = response;
				return { data, total, current_page, last_page, last_page_url, next_page_url };
			} else {
				const endpoint = `/products/search?${query}`;
				const request = await api.get(endpoint);
				const response: IPaginateResponse = request.data;
				const { data, total, current_page, last_page, last_page_url, next_page_url } = response;
				return { data, total, current_page, last_page, last_page_url, next_page_url };
			}
		} catch (error) {
			if (!isAxiosError(error)) throw new UnexpectedError();
			throw new ApiRequestError(error.response?.data);
		}
	}
}
