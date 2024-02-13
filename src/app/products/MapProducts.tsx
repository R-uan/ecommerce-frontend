import {
	resetProductsData,
	setCurrentPage,
	setLastPage,
	setNextPage,
	setProductsData,
	setTotalItens,
} from "@/redux/slices/ProductsDataSlice";
import { useEffect } from "react";
import { RootState } from "@/redux/store";
import Catalog from "@/components/Catalog";
import ProductMini from "@/components/ProductMini";
import { RequestProducts } from "@/RequestProducts";
import FetchTrigger from "@/components/FetchTrigger";
import { useDispatch, useSelector } from "react-redux";
import { setErrorMessage } from "@/redux/slices/ErrorProviderSlice";

export default function MapProducts() {
	const dispatch = useDispatch();
	const { products, next_page, last_page, current_page } = useSelector(
		(s: RootState) => s.productsData
	);

	async function FetchProducts() {
		try {
			if (current_page == last_page && current_page != null) {
				console.log("last");
				return;
			}

			let response;
			if (next_page) {
				response = await RequestProducts(next_page);
			} else {
				response = await RequestProducts();
				dispatch(setLastPage(response.last_page_url));
				dispatch(setTotalItens(response.total));
			}

			dispatch(setErrorMessage(""));
			dispatch(setNextPage(response.next_page_url));
			dispatch(setCurrentPage(response.current_page_url));
			dispatch(setProductsData([...products, ...response.data]));
		} catch (error) {
			if (error instanceof Error) {
				dispatch(setErrorMessage(error.message));
			}
		}
	}

	useEffect(() => {
		dispatch(resetProductsData());
		FetchProducts();
	}, []);

	return (
		<Catalog>
			<div className="products">
				{products.map((product) => {
					return <ProductMini key={product.id} data={product} />;
				})}
			</div>
			<FetchTrigger callback={FetchProducts} />
		</Catalog>
	);
}
