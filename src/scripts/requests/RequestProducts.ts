import Requests from "./Requests";
import { isAxiosError } from "axios";
import { ICart } from "@/interfaces/ICart";
import { IProduct } from "@/interfaces/IProduct";
import api from "./axios-instances/PublicAxiosInstance";
import { IPlanetDestination } from "@/interfaces/IOrder";
import { ProductQuery } from "@/interfaces/ProductQuery";
import IPaginateResponse from "@/interfaces/IPaginateResponse";
import ApiRequestError from "../error-handling/APIRequestError";
import UnexpectedError from "../error-handling/UnexpectedError";

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

	static async Query(params: string, query: ProductQuery = ProductQuery.Name) {
		try {
			const request = await api.get(`/products/search?${query}[lk]=${params}`);
			const response: IPaginateResponse = request.data;
			const { data, total, current_page, last_page, last_page_url, next_page_url } = response;
			return { data, total, current_page, last_page, last_page_url, next_page_url };
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

	static async FromManufacturer(query: string) {
		try {
			const request = await api.get(`/manufacturers/products/${query}`);
			const response: IPaginateResponse = request.data;
			const { data, total, current_page, last_page, last_page_url, next_page_url } = response;
			return { data, total, current_page, last_page, last_page_url, next_page_url };
		} catch (error) {
			if (!isAxiosError(error)) throw new UnexpectedError();
			throw new ApiRequestError(error.response?.data);
		}
	}
}
