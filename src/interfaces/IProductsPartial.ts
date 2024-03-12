export interface IProductsPartial {
	id: number;
	name: string;
	category: string;
	image_url: string;
	availability: boolean;
	unit_price: string;
	manufacturer: string;
	units?: number;
	taxes?: number;
}
