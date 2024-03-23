import { ICart } from "@/interfaces/ICart";
import { QueryParams, QueryType } from "@/interfaces/ICatalogQueries";
import { IPlanetDestination } from "@/interfaces/IOrder";
import IPaginateResponse from "@/interfaces/IPaginateResponse";
import { IProduct } from "@/interfaces/IProduct";
import { isAxiosError } from "axios";
import ApiRequestError from "../error-handling/ApiRequestError";
import UnexpectedError from "../error-handling/UnexpectedError";
import Util from "../Util";
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

	static async Miniatures() {
		try {
			const storage = localStorage.getItem("cart");
			if (storage) {
				const cart: ICart = JSON.parse(storage);
				const request = await api.post("/products/miniatures", { products: cart.uniques });
				const data = request.data;
				return data;
			}
		} catch (error) {
			if (!isAxiosError(error)) throw new UnexpectedError();
			throw new ApiRequestError(error.response?.data);
		}
	}

	/* static async Query(params: QueryOptions) {
		try {
			let name_query = null;
			let price_query = null;
			let category_query = null;
			let availability_query = null;
			params.name ? (name_query = `name[lk]=${params.name}`) : null;
			params.category ? (category_query = `category[lk]=${params.category}`) : null;
			params.availability ? (availability_query = `availability[eq]=${params.availability}`) : null;
			if (params.price && params.price.min && params.price.max) {
				price_query = `price[gte]=${params.price.min}&price[lte]=${params.price.max}`;
			} else if (params.price && params.price.min) {
				price_query = `price[gte]=${params.price.min}`;
			} else if (params.price && params.price.max) {
				price_query = `price[lte]=${params.price.max}`;
			}
			let full_query = [name_query, price_query, availability_query, category_query]
				.filter((ele) => {
					return ele != null;
				})
				.join("&");
			const request = await api.get(`/products/search?${full_query}`);
			const response: IPaginateResponse = request.data;
			const { data, total, current_page, last_page, last_page_url, next_page_url } = response;
			return { data, total, current_page, last_page, last_page_url, next_page_url };
		} catch (error) {
			if (isAxiosError(error)) throw new ApiRequestError(error.message);
			else throw new Error("Unexpected Error.");
		}
	} */

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
