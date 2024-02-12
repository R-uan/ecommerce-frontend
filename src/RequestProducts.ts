import axios from "axios";

export async function RequestProducts(url: string = "http://127.0.0.1:8000/api/products") {
	const response = (await axios.get(url)).data;
	const xdd = {
		data: response.data.data,
		total: response.data.total,
		current_page_url: url,
		next_page_url: response.data.next_page_url,
		last_page_url: response.data.last_page_url,
	};
	return xdd;
}

export async function FetchNextPage(url: string) {}
