export default interface IOrder {
	id: number;
	total: string;
	status: string;
	order_date: string;
	payment_method: string;
	planet_destination: string;
	payment_received: null | string;
	product_finished: null | string;
	order_finalized: null | string;
	order_itens: OrderItem[];
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
