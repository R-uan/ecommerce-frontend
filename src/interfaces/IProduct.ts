export interface IProduct {
	id: number;
	name: string;
	category: string;
	image_url: string;
	manufacturer: string;
	unit_price?: string;
	production_time?: string;
	availability?: boolean;
	long_description?: string;
	short_description?: string;
	manufacturers_id?: number;
	units?: number;
	taxes?: number;
	product_details?: ProductDetails;
}

export interface ProductDetails {
	energy_system: string;
	landing_system: string;
	emergency_system: string;
	propulsion_system: string;
	navigation_system: string;
	comunication_system: string;
	termic_protection: string;
	external_structure: string;
}
