import { useRef } from "react";
import ProductMiniature from "../../components/ProductMiniature";
const ProductTestData = {
	id: 1,
	name: "Example Product",
	description: "This is a mock product for testing purposes.",
	image_url: "https://example.com/image.jpg",
	category: "Test Category",
	availability: true,
	unit_price: "19.99",
	manufacturers_id: 123,
	manufacturer_name: "Mock Manufacturer",
};
export default function Suggestions() {
	const slider = useRef(null);
	function slide() {
		slider.current.scrollLeft += 500;
	}

	function unslide() {
		slider.current.scrollLeft -= 500;
	}
	return (
		<>
			<section className="gap-[15px] flex flex-col">
				<h1 className="text-[2vw] w-full font-bebas text-[#FF003C]">SIMILAR PRODUCTS</h1>
				<div
					ref={slider}
					className="flex w-full gap-5 overflow-x-scroll pr-[10px] left_slider">
					<ProductMiniature data={ProductTestData} />
					<ProductMiniature data={ProductTestData} />
					<ProductMiniature data={ProductTestData} />
					<ProductMiniature data={ProductTestData} />
					<ProductMiniature data={ProductTestData} />
					<ProductMiniature data={ProductTestData} />
					<ProductMiniature data={ProductTestData} />
					<ProductMiniature data={ProductTestData} />
				</div>
				<button onClick={slide}>click</button>
				<button onClick={unslide}>unclick</button>
			</section>
			<section className="gap-[15px] flex flex-col">
				<h1 className="text-[2vw] w-full font-bebas text-[#FF003C]">
					From same Manufacturer
				</h1>
				<div className="flex w-full justify-between">
					<ProductMiniature data={ProductTestData} />
					<ProductMiniature data={ProductTestData} />
					<ProductMiniature data={ProductTestData} />
					<ProductMiniature data={ProductTestData} />
					<ProductMiniature data={ProductTestData} />
				</div>
			</section>
		</>
	);
}
