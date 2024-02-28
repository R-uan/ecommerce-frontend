"use client";
import Reviews from "./Reviews";
import ScreenCover from "./ScreenCover";
import Suggestions from "./Suggestions";
import ProductImages from "./ProductImages";
import ProductDescription from "./ProductDescription";
import ProductInformation from "./ProductInformation";
import ProductProvider from "./context/ProductProvider";
import TechnicalInformation from "./TechnicalInformation";

export default function Product({ params }: { params: { product: string } }) {
	return (
		<ProductProvider>
			<main className="bg-[#050a0e] relative w-full h-full flex flex-col pt-[10vh] pb-0.5 px-0.5">
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
