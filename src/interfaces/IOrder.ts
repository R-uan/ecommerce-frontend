export default interface IOrder {
	id: number;
	total: string;
	status: string;
	order_date: string;
	payment_method: string;
	payment_received: null | string;
	product_finished: null | string;
	order_finalized: null | string;
	planet_destination: IPlanetDestination;
	order_itens: OrderItem[];
}

export interface IPlanetDestination {
	id: number;
	name: string;
	delivery_price: string;
	special_conditions: string;
}

export interface OrderItem {
	id: number;
	unit_price: string;
	amount: number;
	total_price: string;
	products: Product;
}

interface Product {
	id: number;
	name: string;
	category: string;
	image_url: string;
	manufacturers_id: number;
	manufacturer: Manufacturer;
}

interface Manufacturer {
	id: number;
	name: string;
}
