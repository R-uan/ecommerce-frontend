import { useProductContext } from "./context/ProductProvider";

export default function ProductDescription() {
	const state = useProductContext();
	const product = state.product;

	return (
		<section className="gap-[15px] flex flex-col">
			<h1 className="text-[2vw] w-full font-bebas text-[#FF003C]">Product Description</h1>
			<div className="h-[100%]">
				<p className="text-[1.5vw] leading-snug">{product?.short_description}</p>
				<br />
				<p className="text-[1.5vw] leading-snug">{product?.long_description}</p>
			</div>
		</section>
	);
}
