import { IProductList, setAll, setListData, setPaginate } from "@/redux/slices/ProductListSlice";
import { useDispatch, useSelector } from "react-redux";
import { RequestProducts, RequestProductsQuery } from "@/scripts/requests/RequestProducts";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { RootState } from "@/redux/store";
import ProductMiniature from "./ProductMiniature";
import { useEffect, useState } from "react";

export default function ProductMap() {
	const router = useRouter();
	const dispatch = useDispatch();
	const urlQuery = useSearchParams();
	const productList = useSelector((s: RootState) => s.productList);
	const [fetchingStatus, setFetchingStatus] = useState(false);
	const nameQuery = urlQuery.get("name");

	async function Default(refetch?: boolean) {
		try {
			if (
				productList.current_page &&
				productList.current_page === productList.last_page &&
				!refetch
			) {
				console.log("0");
				return;
			}
			setFetchingStatus(true);
			if (nameQuery && nameQuery != "") {
				const response = await RequestProductsQuery(nameQuery);
				console.log("1");
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
					console.log("2");
					const response: IProductList = await RequestProducts(productList.next_page_url);
					const all = {
						data: response.data,
						current_page: response.current_page,
						next_page_url: response.next_page_url,
					};
					dispatch(setPaginate(all));
					setFetchingStatus(false);
				} else {
					console.log("3");
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
		if (nameQuery) Default(true);
		else Default();
	}, [nameQuery]);

	return (
		<>
			{productList?.data?.map((product) => {
				return <ProductMiniature key={product.id} data={product} />;
			})}
			<button onClick={() => Default()} disabled={fetchingStatus}>
				Teste
			</button>
		</>
	);
}
