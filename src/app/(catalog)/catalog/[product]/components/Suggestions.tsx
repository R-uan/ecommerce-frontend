import { useEffect, useRef, useState } from "react";
import ProductMiniature from "../../../components/ProductMiniature";
import { RequestFromManufacturer } from "@/scripts/requests/RequestProducts";
import { useProductContext } from "../context/ProductProvider";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const ProductTestData = {
	id: 1,
	name: "Example Product",
	description: "This is a mock product for testing purposes.",
	image_url: "https://example.com/image.jpg",
	category: "Test Category",
	availability: true,
	unit_price: "19.99",
	manufacturers_id: 123,
	manufacturer: "Mock Manufacturer",
};

export default function Suggestions() {
	const state = useProductContext();
	const [manuSuggestions, setManuSuggestions] = useState<IProductsPartial[] | null>(null);
	const similarProductsRef = useRef<HTMLDivElement>(null);
	const sameManufacturerRef = useRef<HTMLDivElement>(null);

	async function FromManufacturer() {
		if (state.product) {
			const products = await RequestFromManufacturer(state.product.manufacturers_id);
			setManuSuggestions(products);
		}
	}

	useEffect(() => {
		FromManufacturer();
	}, [state.fetched]);
	return (
		<>
			<section className="gap-[15px] flex flex-col">
				<div className="flex gap-[20px]">
					<h1 className="text-[2vw] leading-snug font-bebas text-[#FF003C]">
						SIMILAR PRODUCTS
					</h1>
					<div className="flex">
						<button
							onClick={() => {
								similarProductsRef.current!.scrollLeft -= 1000;
							}}>
							<IoMdArrowDropleft className="text-[2vw] leading-snug" />
						</button>
						<button
							onClick={() => {
								similarProductsRef.current!.scrollLeft += 1000;
							}}>
							<IoMdArrowDropright className="text-[2vw] leading-snug" />
						</button>
					</div>
				</div>
				<div
					ref={similarProductsRef}
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
			</section>
			{!manuSuggestions ? null : (
				<section className="gap-[15px] flex flex-col">
					<div className="flex gap-[20px]">
						<h1 className="text-[2vw] leading-snug font-bebas text-[#FF003C]">
							More From {state.product?.manufacturer}
						</h1>
						<div className="flex">
							<button
								onClick={() => {
									sameManufacturerRef.current!.scrollLeft -= 1000;
								}}>
								<IoMdArrowDropleft className="text-[2vw] leading-snug" />
							</button>
							<button
								onClick={() => {
									sameManufacturerRef.current!.scrollLeft += 1000;
								}}>
								<IoMdArrowDropright className="text-[2vw] leading-snug" />
							</button>
						</div>
					</div>
					<div
						ref={sameManufacturerRef}
						className="flex w-full gap-5 overflow-x-scroll pr-[10px] left_slider">
						{manuSuggestions?.map((product) => {
							return <ProductMiniature key={product.id} data={product} />;
						})}
					</div>
				</section>
			)}
		</>
	);
}
