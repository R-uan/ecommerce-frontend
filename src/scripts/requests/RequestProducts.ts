import axios, { AxiosError, isAxiosError } from "axios";
import { config } from "dotenv";
import ProductFetchingError from "../error-handling/ProductFetchingError";
import UnexpectedError from "../error-handling/UnexpectedError";
import { ProductQuery } from "@/interfaces/ProductQuery";
config();

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;

export async function RequestProducts(url: string = `${BACKEND_URL}/api/products/miniatures`) {
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

export async function RequestProductsQuery(
	params: string,
	url?: string,
	query: ProductQuery = ProductQuery.Name
) {
	let response;
	if (url) {
		response = (await axios.get(url)).data;
	} else {
		response = (await axios.get(`${BACKEND_URL}/api/products/search?${query}[lk]=${params}`))
			.data;
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
		const response: IProduct = (await axios.get(`${BACKEND_URL}/api/products/${id}`)).data;
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
		const response = (await axios.get(`${BACKEND_URL}/api/manufacturers/${id}/products`)).data;
		return response;
	} catch (error) {}
}
