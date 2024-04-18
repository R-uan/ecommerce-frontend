"use client";
import ProductDescription from "./components/ProductDescription";
import ProductImages from "./components/ProductImages";
import ProductInformation from "./components/ProductInformation";
import Reviews from "./components/ProductReviews";
import ScreenCover from "./components/ScreenCover";
import Suggestions from "./components/Suggestions";
import TechnicalInformation from "./components/TechnicalInformation";
import ProductProvider from "./context/ProductProvider";

export default function Product({ params }: { params: { product: string } }) {
	// TODO Favourite product button and logic
	return (
		<ProductProvider>
			<main className="bg-[#050a0e] relative w-full h-full flex flex-col px-[2vw] pb-[50px]">
				<ScreenCover />
				<div className="h-[50px] w-full"></div>
				<div className="flex flex-col gap-[20px] w-full min-h-[85vh] p-[2px]">
					<div className="flex w-full py-[2vw] gap-[30px]">
						<ProductImages />
						<ProductInformation product_slug={params.product} />
					</div>
					<div className="gap-5 flex flex-col">
						<ProductDescription />
						<TechnicalInformation />
						<Suggestions />
						<Reviews />
					</div>
				</div>
			</main>
		</ProductProvider>
	);
}
