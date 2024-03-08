"use client";
import { IProductList, setAll, setPaginate } from "@/redux/slices/ProductsDataSlice";
import { RootState } from "@/redux/store";
import { RequestProducts, RequestProductsQuery } from "@/scripts/requests/RequestProducts";
import { Suspense, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import ProductMiniature from "./ProductMiniature";
import { useSearchParams } from "next/navigation";

export default function ProductMap(/* { query = null }: { query?: string | null } */) {
	//#region

	const searchParams = useSearchParams();
	const query = searchParams.get("name");
	const dispatch = useDispatch();
	const ProductsData = useSelector((s: RootState) => s.products_data);
	const [fetchingStatus, setFetchingStatus] = useState(false);
	const [viewRef, inView] = useInView({ onChange: HandleNextPage });
	const [currentQuery, setCurrentQuery] = useState<string | null>(null);

	async function Default() {
		setFetchingStatus(true);
		if (query && query != "") await FetchQuery();
		else await InitialFetch();
		setFetchingStatus(false);
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

	async function HandleNextPage() {
		if (ProductsData.current_page === ProductsData.last_page) return;
		if (!inView && !fetchingStatus) {
			if (ProductsData.next_page_url && currentQuery === query) {
				await FetchPaginate();
			}
		}
	}

	useEffect(() => {
		setCurrentQuery(query);
		Default();
	}, [query]);
	//#endregion

	return (
		<div className="h-full flex w-[clamp(1300px,85vw,89vw)] items-center flex-col justify-center mb-[50px] p-[5px]">
			<div className="w-full flex flex-row justify-between mx-0 my-3 text-all-white">
				<h3 className="text-[1.75rem] leading-7">Results</h3>
				<p className="text-[1.75rem] leading-7">
					Showing {ProductsData.data?.length} of {ProductsData.total}
				</p>
			</div>
			<section className="w-full grid gap-y-[30px] gap-x-[auto] justify-between grid-cols-[repeat(4,auto)]">
				{ProductsData?.data?.map((product) => {
					return <ProductMiniature key={product.id} data={product} />;
				})}
			</section>
			<div ref={viewRef} className="flex justify-center items-center w-full h-[25px] m-[5px] p-[5px]">
				<button onClick={Default} disabled={fetchingStatus}>
					Teste
				</button>
			</div>
		</div>
	);
}
