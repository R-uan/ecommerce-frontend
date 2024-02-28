interface IProduct {
	id: number;
	name: string;
	category: string;
	unit_price: string;
	image_url: string;
	insurance: string;
	availability: boolean;
	long_description: string;
	short_description: string;
	manufacturers_id: number;
	manufacturer: string;
	product_details: {
		energy_system: string;
		landing_system: string;
		emergency_system: string;
		propulsion_system: string;
		navigation_system: string;
		comunication_system: string;
		termic_protection: string;
		external_structure: string;
	};
}
