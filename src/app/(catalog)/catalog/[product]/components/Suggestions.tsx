import { IProduct } from "@/interfaces/IProduct";
import ManufacturerRequests from "@/scripts/requests/ManufacturerRequests";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import ProductMiniature from "../../../components/ProductMiniature";
import { useProductContext } from "../context/ProductProvider";

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
	const [manuSuggestions, setManuSuggestions] = useState<IProduct[] | null>(null);
	const similarProductsRef = useRef<HTMLDivElement>(null);
	const sameManufacturerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		async function FromManufacturer() {
			if (state.product) {
				const products = await ManufacturerRequests.Products(state.product.manufacturer);
				setManuSuggestions(products.data);
			}
		}
		FromManufacturer();
	}, [state.fetched]);

	return (
		<>
			<section className="gap-[15px] flex flex-col">
				<div className="flex gap-[20px]">
					<h1 className="text-[2vw] leading-snug font-bebas text-[#FF003C]">SIMILAR PRODUCTS</h1>
					<div className="flex">
						<button
							onClick={() => {
								similarProductsRef.current!.scrollLeft -= 1000;
							}}>
							<IoMdArrowDropleft fill="white" className="text-[2vw] leading-snug" />
						</button>
						<button
							onClick={() => {
								similarProductsRef.current!.scrollLeft += 1000;
							}}>
							<IoMdArrowDropright fill="white" className="text-[2vw] leading-snug" />
						</button>
					</div>
				</div>
				<div ref={similarProductsRef} className="flex w-full gap-5 overflow-x-scroll pr-[10px] hide-scrollbar">
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
						<h1 className="text-[2vw] leading-snug font-bebas text-[#FF003C]">More From {state.product?.manufacturer}</h1>
						<div className="flex">
							<button
								onClick={() => {
									sameManufacturerRef.current!.scrollLeft -= 1000;
								}}>
								<IoMdArrowDropleft fill="white" className="text-[2vw] leading-snug" />
							</button>
							<button
								onClick={() => {
									sameManufacturerRef.current!.scrollLeft += 1000;
								}}>
								<IoMdArrowDropright fill="white" className="text-[2vw] leading-snug" />
							</button>
						</div>
					</div>
					<div ref={sameManufacturerRef} className="flex w-full gap-5 h-fit overflow-x-scroll pr-[10px] hide-scrollbar">
						{manuSuggestions?.map((product) => {
							return <ProductMiniature key={product.id} data={product} />;
						})}
					</div>
				</section>
			)}
		</>
	);
}
