import ProductMini from "./ProductMini";
import { RootState } from "@/redux/store";
import { useState, useEffect } from "react";
import { RiLoader5Fill } from "react-icons/ri";
import IProducts from "@/interfaces/IProducts";
import { RequestProducts } from "@/RequestProducts";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { setProductsDataTest } from "@/redux/slices/ProductsDataSlice";

export default function Results() {
	const dispatch = useDispatch();
	const [inViewRef, isInView] = useInView({ delay: 1000, trackVisibility: false, threshold: 1 });
	const [totalItens, setTotalItens] = useState(0);
	const [isLastPage, setIsLastPage] = useState(false);
	const [nextPage, setNextPage] = useState<string | null>(null);
	const [lastPage, setLastPage] = useState<string | null>(null);
	const productsData = useSelector((state: RootState) => state.productsData.data);

	async function FetchProducts() {
		if (isLastPage) return;

		let response;
		if (nextPage) {
			response = await RequestProducts(nextPage);
			response.current_page_url === response.last_page_url ? setIsLastPage(true) : null;
			setTotalItens(response.total);
		} else {
			response = await RequestProducts();
			setTotalItens(response.total);
		}

		const newProductsData: IProducts[] = [...productsData, ...response.data];
		dispatch(setProductsDataTest(newProductsData));
		if (response.last_page_url) setLastPage(response.last_page_url);
		if (response.next_page_url) setNextPage(response.next_page_url);
	}

	useEffect(() => {
		console.log(isInView);
	}, [isInView]);

	// do the initial fetching
	useEffect(() => {
		FetchProducts();
	}, []);

	useEffect(() => {
		if (isInView) {
			FetchProducts();
		}
	}, [isInView]);

	return (
		<div className="flex flex-col w-[85vw] gap-[15px]">
			<div>
				<span className="text-2xl font-bold">Results</span>
				<p className="text-sm">
					Showing {productsData.length} of {totalItens}
				</p>
			</div>
			<div className="products">
				{productsData.map((product) => {
					return <ProductMini key={product.id} data={product} />;
				})}
			</div>
			{productsData.length > 0 && isLastPage == false ? (
				<div ref={inViewRef} className="h-[30px] flex align-middle justify-center">
					<div className="animate-spin">
						<RiLoader5Fill size={30} />
					</div>
				</div>
			) : null}
		</div>
	);
}
