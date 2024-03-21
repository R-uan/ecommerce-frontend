import Requests from "./Requests";
import { isAxiosError } from "axios";
import { ICart } from "@/interfaces/ICart";
import { IProduct } from "@/interfaces/IProduct";
import api from "./axios-instances/PublicAxiosInstance";
import { IPlanetDestination } from "@/interfaces/IOrder";
import { QueryType } from "@/interfaces/QueryType";
import IPaginateResponse from "@/interfaces/IPaginateResponse";
import UnexpectedError from "../error-handling/UnexpectedError";
import ApiRequestError from "../error-handling/ApiRequestError";
interface QueryOptions {
	name?: string;
	category?: string;
	availability?: boolean;
	price?: { min?: string; max?: string };
}

export enum FilterType {
	Manufacturer = "manufacturers",
	Product = "products",
	Price = "price",
}

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
			if (!isAxiosError(error)) throw new UnexpectedError();
			throw new ApiRequestError(error.response?.data);
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

	static async Query(params: QueryOptions) {
		try {
			let price_query = null;
			let availability_query = null;
			let name_query = null;
			let category_query = null;
			if (params) {
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
			}
			let full_query = [name_query, price_query, availability_query, category_query]
				.filter((ele) => {
					return ele != null;
				})
				.join("&");
			console.log(full_query);
			const request = await api.get(`/products/search?${full_query}`);
			const response: IPaginateResponse = request.data;
			const { data, total, current_page, last_page, last_page_url, next_page_url } = response;
			return { data, total, current_page, last_page, last_page_url, next_page_url };
		} catch (error) {
			if (isAxiosError(error)) throw new ApiRequestError(error.message);
			else throw new Error("Unexpected Error.");
		}
	}

	static async FromManufacturer(query?: string, price?: { min?: string; max?: string }) {
		try {
			let full_query = "";
			let price_query = "";
			if (price && price.min && price.max) {
				price_query = `?price[gte]=${price.min}&price[lte]=${price.max}`;
			} else if (price && price.min) {
				price_query = `?price[gte]=${price.min}`;
			} else if (price && price.max) {
				price_query = `?price[lte]=${price.max}`;
			}

			query ? (full_query += query) : null;
			price_query ? (full_query += price_query) : null;

			if (query) {
				const request = await api.get(`/manufacturers/products/${full_query}`);
				const response: IPaginateResponse = request.data;
				const { data, total, current_page, last_page, last_page_url, next_page_url } = response;
				return { data, total, current_page, last_page, last_page_url, next_page_url };
			} else {
				const request = await api.get(`/products/search${full_query}`);
				const response: IPaginateResponse = request.data;
				const { data, total, current_page, last_page, last_page_url, next_page_url } = response;
				return { data, total, current_page, last_page, last_page_url, next_page_url };
			}
		} catch (error) {
			if (!isAxiosError(error)) throw new UnexpectedError();
			throw new ApiRequestError(error.response?.data);
		}
	}
	static async CatalogFilter(params: QueryOptions, who: FilterType) {
		try {
			let price_query = null;
			const { price } = params;
			if (price && price.min && price.max) {
				price_query = `price[gte]=${price.min}&price[lte]=${price.max}`;
			} else if (price && price.min) {
				price_query = `price[gte]=${price.min}`;
			} else if (price && price.max) {
				price_query = `price[lte]=${price.max}`;
			}

			if (who === FilterType.Manufacturer) {
				const request = await api.get(`/manufacturers/products/${params.name}?${price_query ?? ""}`);
				const response: IPaginateResponse = request.data;
				const { data, total, current_page, last_page, last_page_url, next_page_url } = response;
				return { data, total, current_page, last_page, last_page_url, next_page_url };
			} else if (who === FilterType.Product) {
				const request = await api.get(`/products/search?name[lk]=${params.name}&${price_query ?? ""}`);
				const response: IPaginateResponse = request.data;
				const { data, total, current_page, last_page, last_page_url, next_page_url } = response;
				return { data, total, current_page, last_page, last_page_url, next_page_url };
			} else {
				const request = await api.get(`/products/search?${price_query}`);
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
