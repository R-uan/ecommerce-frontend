import { QueryParams, QueryType } from "@/interfaces/ICatalogQueries";

export default class Util {
	static QueryBuilderApi(params: QueryParams, type: QueryType) {
		const { availability, category, name, price } = params;
		const query: string[] = [];
		name && type == QueryType.Product ? query.push(`name[lk]=${name}`) : null;
		category ? query.push(`category[eq]=${category}`) : null;
		availability ? query.push(`availability[eq]=${availability}`) : null;
		price && price.min ? query.push(`price[gte]=${price.min}`) : null;
		price && price.max ? query.push(`price[lte]=${price.max}`) : null;
		const full_query = `${query.join("&")}`;
		return full_query;
	}

	static QueryBuilder(params: QueryParams, type: QueryType) {
		const { availability, category, name, price } = params;
		const query: string[] = [];
		name ? query.push(`name=${name}`) : null;
		category ? query.push(`cat=${category}`) : null;
		availability ? query.push(`av=${availability}`) : null;
		price && price.min ? query.push(`minp=${price.min}`) : null;
		price && price.max ? query.push(`maxp=${price.max}`) : null;
		const full_query = `?q=${type}&${query.join("&")}`;
		return full_query;
	}
}
