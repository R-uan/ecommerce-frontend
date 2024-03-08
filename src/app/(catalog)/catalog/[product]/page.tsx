"use client";
import Reviews from "./components/ProductReviews";
import ScreenCover from "./components/ScreenCover";
import Suggestions from "./components/Suggestions";
import ProductImages from "./components/ProductImages";
import ProductProvider from "./context/ProductProvider";
import ProductDescription from "./components/ProductDescription";
import ProductInformation from "./components/ProductInformation";
import TechnicalInformation from "./components/TechnicalInformation";

export default function Product({ params }: { params: { product: string } }) {
	return (
		<ProductProvider>
			<main className="bg-[#050a0e] relative w-full h-full flex flex-col px-0.5 pb-[50px]">
				<ScreenCover />
				<div className="h-[50px] w-full"></div>
				<div className="flex flex-col gap-[20px] w-full min-h-[85vh] p-[2px]">
					<div className="flex w-full gap-[30px]">
						<ProductImages />
						<ProductInformation productId={params.product} />
					</div>
					<div className="h-[20px] w-full" />
					<div className="gap-5 flex flex-col pl-[15px]">
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
