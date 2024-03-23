export interface QueryParams {
	name?: string | null;
	category?: string | null;
	availability?: string | null;
	price?: { min?: string | null; max?: string | null };
}

export enum QueryType {
	Manufacturer = "manufacturers",
	Product = "products",
	Price = "price",
}
