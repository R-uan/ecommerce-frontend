import axios, { AxiosError, isAxiosError } from "axios";
const BackendURL = process.env.API_ROOT_URL;

export async function RequestProducts(url: string = "http://127.0.0.1:8000/api/products") {
	try {
		const response = (await axios.get(url)).data;
		return {
			data: response.data.data,
			total: response.data.total,
			current_page_url: `http://127.0.0.1:8000/api/products?page=${response.data.current_page}`,
			next_page_url: response.data.next_page_url,
			last_page_url: response.data.last_page_url,
		};
	} catch (error) {
		if (isAxiosError(error)) throw new Error(error.message);
		else throw new Error("Unexpected Error.");
	}
}

export async function RequestProductsQuery(params: string, url?: string) {
	let response;
	if (url) {
		response = (await axios.get(url)).data;
	} else {
		response = (await axios.get(`http://127.0.0.1:8000/api/products/search?name[lk]=${params}`))
			.data;
	}
	return {
		data: response.data.data,
		total: response.data.total,
		current_page_url: `http://127.0.0.1:8000/api/products/search?page${response.data.current_page}`,
		next_page_url: response.data.next_page_url,
		last_page_url: response.data.last_page_url,
	};
}
