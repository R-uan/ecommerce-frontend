import { RequestProductsQuery } from "@/RequestProducts";
import Catalog from "@/components/Catalog";
import ProductMini from "@/components/ProductMini";
import {
	resetProductsData,
	setCurrentPage,
	setLastPage,
	setNextPage,
	setProductsData,
	setTotalItens,
} from "@/redux/slices/ProductsDataSlice";
import { RootState } from "@/redux/store";
import { useSearchParams } from "next/dist/client/components/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function MapQueryResult() {
	const dispatch = useDispatch();
	const { products, next_page } = useSelector((state: RootState) => state.productsData);
	const searchParams = useSearchParams();
	const q = searchParams.get("q");

	async function HandleQueryRequest() {
		let response;
		if (next_page && q) {
			response = await RequestProductsQuery(q, next_page);
		} else if (q) {
			response = await RequestProductsQuery(q);
		}
		if (response) {
			dispatch(setTotalItens(response.total));
			dispatch(setNextPage(response.next_page_url));
			dispatch(setLastPage(response.last_page_url));
			dispatch(setCurrentPage(response.current_page_url));
			dispatch(setProductsData([...products, ...response.data]));
		}
	}

	useEffect(() => {
		dispatch(resetProductsData());
		HandleQueryRequest();
	}, [q]);

	return (
		<>
			<Catalog>
				<div className="products">
					{products.map((product) => {
						return <ProductMini key={product.id} data={product} />;
					})}
				</div>
				<button onClick={HandleQueryRequest}>Click here</button>
			</Catalog>
		</>
	);
}
