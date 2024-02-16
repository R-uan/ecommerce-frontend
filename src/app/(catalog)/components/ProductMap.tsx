import { IProductList, setAll, setListData } from "@/redux/slices/ProductListSlice";
import { useDispatch, useSelector } from "react-redux";
import { RequestProducts, RequestProductsQuery } from "@/RequestProducts";
import { useSearchParams } from "next/navigation";
import { RootState } from "@/redux/store";
import ProductMiniature from "./ProductMiniature";
import { useEffect } from "react";

export default function ProductMap() {
	const dispatch = useDispatch();
	const urlQuery = useSearchParams();
	const productList = useSelector((s: RootState) => s.productList);
	const nameQuery = urlQuery.get("name");

	async function Default() {
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
		} else {
			const response: IProductList = await RequestProducts();
			const all = {
				data: response.data,
				total: response.total,
				current_page: response.current_page,
				last_page: response.last_page,
				next_page_url: response.next_page_url,
			};
			dispatch(setAll(all));
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
		</>
	);
}
