import axios, { AxiosError, isAxiosError } from "axios";
import ProductFetchingError from "../error-handling/ProductFetchingError";
import UnexpectedError from "../error-handling/UnexpectedError";
import { ProductQuery } from "@/interfaces/ProductQuery";
import api from "./PublicAxiosInstance";
config();
import { config } from "dotenv";
import { IPlanetDestination } from "@/interfaces/IOrder";
import { ICart } from "@/interfaces/ICart";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;

export async function RequestProducts(url: string = `${BACKEND_URL}/products/miniatures`) {
	try {
		const response = (await axios.get(url)).data;
		return {
			data: response.data,
			total: response.total,
			current_page: response.current_page,
			last_page: response.last_page,
			next_page_url: response.next_page_url || "end",
		};
	} catch (error) {
		if (isAxiosError(error)) throw new Error(error.message);
		else throw new Error("Unexpected Error.");
	}
}

export async function RequestProductsQuery(params: string, url?: string, query: ProductQuery = ProductQuery.Name) {
	let response;
	if (url) {
		response = (await axios.get(url)).data;
	} else {
		response = (await axios.get(`${BACKEND_URL}/products/search?${query}[lk]=${params}`)).data;
	}
	return {
		data: response.data,
		total: response.total,
		current_page: response.current_page,
		last_page: response.last_page,
		next_page_url: response.next_page_url,
		last_page_url: response.last_page_url,
	};
}

export async function RequestSingleProduct(id: string) {
	try {
		const response: IProduct = (await axios.get(`${BACKEND_URL}/products/${id}`)).data;
		console.log(response);
		return response;
	} catch (error) {
		if (error instanceof AxiosError) {
			if (error.response?.status == 404) {
				throw new ProductFetchingError(error.response.data.message);
			}
		} else throw new UnexpectedError();
	}
}

export async function RequestFromManufacturer(id: number) {
	try {
		const response = (await axios.get(`${BACKEND_URL}/manufacturers/${id}/products`)).data;
		return response;
	} catch (error) {}
}

export async function RequestDestinations() {
	try {
		const response = await api.get("/destinations");
		const data: IPlanetDestination[] = response.data;
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function RequestSome() {
	try {
		const storage = localStorage.getItem("cart");
		if (storage) {
			const cart: ICart = JSON.parse(storage);
			const request = await api.post("/products/some", { products: cart.uniques });
			const data = request.data;
			return data;
		}
	} catch (error) {
		console.log(error);
	}
}
