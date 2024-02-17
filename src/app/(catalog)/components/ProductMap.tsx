import { IProductList, setAll, setListData, setPaginate } from "@/redux/slices/ProductListSlice";
import { useDispatch, useSelector } from "react-redux";
import { RequestProducts, RequestProductsQuery } from "@/scripts/requests/RequestProducts";
import { useSearchParams } from "next/navigation";
import { RootState } from "@/redux/store";
import ProductMiniature from "./ProductMiniature";
import { useEffect, useState } from "react";

export default function ProductMap() {
	const dispatch = useDispatch();
	const urlQuery = useSearchParams();
	const productList = useSelector((s: RootState) => s.productList);
	const [fetchingStatus, setFetchingStatus] = useState(false);
	const nameQuery = urlQuery.get("name");

	async function Default() {
		try {
			if (productList.current_page && productList.current_page === productList.last_page) {
				return;
			}
			setFetchingStatus(true);
			if (nameQuery && nameQuery != "") {
				const response = await RequestProductsQuery(nameQuery);
				const all = {
					data: response.data,
					total: response.total,
					current_page: response.current_page,
					last_page: response.last_page,
					last_page_url: response.last_page_url,
					next_page_url: response.next_page_url,
				};
				dispatch(setAll(all));
				setFetchingStatus(false);
			} else {
				if (productList.next_page_url) {
					const response: IProductList = await RequestProducts(productList.next_page_url);
					const all = {
						data: response.data,
						current_page: response.current_page,
						next_page_url: response.next_page_url,
					};
					dispatch(setPaginate(all));
					setFetchingStatus(false);
				} else {
					const response: IProductList = await RequestProducts();
					const all = {
						data: response.data,
						total: response.total,
						current_page: response.current_page,
						last_page: response.last_page,
						next_page_url: response.next_page_url,
					};
					console.log(all);
					dispatch(setAll(all));
					setFetchingStatus(false);
				}
			}
		} catch (error) {
			console.log(error);
			setFetchingStatus(false);
		}
	}

	useEffect(() => {
		Default();
	}, [nameQuery]);

	return (
		<>
			{productList?.data?.map((product) => {
				return <ProductMiniature data={product} />;
			})}
			<button onClick={Default} disabled={fetchingStatus}>
				Teste
			</button>
		</>
	);
}
