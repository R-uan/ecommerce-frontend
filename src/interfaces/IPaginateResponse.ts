import { IProduct } from "./IProduct";

export default interface IPaginateResponse {
	data: IProduct[];
	total: number;
	last_page_url?: string;
	next_page_url: string | null;
	current_page: number;
	last_page: number;
	first_page_url?: string;
	from?: number;
	links?: {
		url: string | null;
		label: string;
		active: boolean;
	}[];
	path?: string;
	per_page?: number;
	prev_page_url?: string | null;
	to?: number;
}
