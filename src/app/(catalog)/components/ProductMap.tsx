import { IProductList, setAll, setListData, setPaginate } from "@/redux/slices/ProductsDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { RequestProducts, RequestProductsQuery } from "@/scripts/requests/RequestProducts";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { RootState } from "@/redux/store";
import ProductMiniature from "./ProductMiniature";
import { useEffect, useState } from "react";
import styles from "./products-map.module.scss";
import { useInView } from "react-intersection-observer";

export default function ProductMap() {
	//#region
	const router = useRouter();
	const dispatch = useDispatch();
	const urlQuery = useSearchParams();
	const ProductsData = useSelector((s: RootState) => s.productsData);
	const [fetchingStatus, setFetchingStatus] = useState(false);

	const [currentQuery, setCurrentQuery] = useState<string | null>(null);
	const query = urlQuery.get("name");

	async function Default() {
		console.log("Cur " + ProductsData.current_page);
		console.log("Last " + ProductsData.last_page);
		setFetchingStatus(true);
		if (
			ProductsData.current_page &&
			ProductsData.current_page === ProductsData.last_page &&
			query === currentQuery
		) {
			console.log("Last Page Reached");
			return;
		}
		if (query != currentQuery && query != "") {
			console.log("Fetching Query change");
			setCurrentQuery(query);
			await FetchQuery();
		} else if (ProductsData.next_page_url) {
			console.log("Fetching Paginate");
			await FetchPaginate();
		} else {
			console.log("Initial Fetching");
			await InitialFetch();
		}
		setFetchingStatus(false);
		console.log("Finish Fetching");
	}

	async function InitialFetch() {
		const response = await RequestProducts();
		const data = {
			data: response.data,
			total: response.total,
			current_page: response.current_page,
			last_page: response.last_page,
			next_page_url: response.next_page_url,
		};
		dispatch(setAll(data));
	}

	async function FetchQuery() {
		const response = await RequestProductsQuery(query!);
		const all = {
			data: response.data,
			total: response.total,
			current_page: response.current_page,
			last_page: response.last_page,
			last_page_url: response.last_page_url,
			next_page_url: response.next_page_url,
		};
		dispatch(setAll(all));
	}

	async function FetchPaginate() {
		const { next_page_url } = ProductsData;
		if (next_page_url) {
			const response: IProductList = await RequestProducts(next_page_url);
			const information = {
				data: response.data,
				current_page: response.current_page,
				next_page_url: response.next_page_url,
			};
			dispatch(setPaginate(information));
		}
	}

	useEffect(() => {
		Default();
	}, [query]);
	//#endregion

	const [viewRef, inView] = useInView({ onChange: HandleNextPage });
	async function HandleNextPage() {
		console.log(inView);
		if (!inView && !fetchingStatus) {
			Default();
		}
	}
	return (
		<div className={styles.catalog_itens}>
			<div className={styles.upper_bar}>
				<h3>Results</h3>
				<p>
					Showing {ProductsData.data?.length} of {ProductsData.total}
				</p>
			</div>
			<section className={styles.catalog_map}>
				{ProductsData?.data?.map((product) => {
					return <ProductMiniature key={product.id} data={product} />;
				})}
			</section>
			<div ref={viewRef} className={styles.fetch_next_page}>
				<button onClick={Default} disabled={fetchingStatus}>
					Teste
				</button>
			</div>
		</div>
	);
}
