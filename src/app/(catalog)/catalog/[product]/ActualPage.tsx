import { MdReviews } from "react-icons/md";
import ScreenCover from "./components/ScreenCover";
import Suggestions from "./components/Suggestions";
import ProductImages from "./components/ProductImages";
import { useProductContext } from "./context/ProductProvider";
import ProductInformation from "./components/ProductInformation";
import ProductDescription from "./components/ProductDescription";
import TechnicalInformation from "./components/TechnicalInformation";
import NotFound from "@/app/components/ErrorPages/not-found/NotFound";

export default function ActualPage({ slug }: { slug: string }) {
	const state = useProductContext();

	return (
		<>
			{state.errorMessage ? (
				<NotFound />
			) : (
				<main className="bg-[#050a0e] relative w-full h-full flex flex-col px-[2vw] pb-[50px]">
					<ScreenCover />
					<div className="h-[50px] w-full"></div>
					<div className="flex flex-col gap-[20px] w-full min-h-[85vh] p-[2px]">
						<div className="flex w-full py-[2vw] gap-[30px]">
							<ProductImages />
							<ProductInformation product_slug={slug} />
						</div>
						<div className="gap-5 flex flex-col">
							<ProductDescription />
							<TechnicalInformation />
							<Suggestions />
							<MdReviews />
						</div>
					</div>
				</main>
			)}
		</>
	);
}
