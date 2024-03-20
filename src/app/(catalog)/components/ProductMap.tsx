"use client";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductMiniature from "./ProductMiniature";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import IPaginateResponse from "@/interfaces/IPaginateResponse";
import { RequestProducts } from "@/scripts/requests/RequestProducts";
import { setPagination, setProductList } from "@/redux/slices/ProductListing";

export default function ProductMap() {
	const searchParams = useSearchParams();
	const query = searchParams.get("name");
	const dispatch = useDispatch();
	const ProductListing = useSelector((s: RootState) => s.product_listing);
	const [fetchingStatus, setFetchingStatus] = useState(false);
	const [viewRef, inView] = useInView({ onChange: HandleNextPage });
	const [currentQuery, setCurrentQuery] = useState<string | null>(null);

	async function HandleNextPage() {
		if (ProductListing.current_page === ProductListing.last_page) return;
		if (!inView && !fetchingStatus) {
			if (ProductListing.next_page_url && currentQuery === query) {
				const next_page = await RequestProducts.Paginate(ProductListing.next_page_url);
				next_page ? dispatch(setPagination(next_page)) : null;
			}
		}
	}

	useEffect(() => {
		async function InitialFetch() {
			setFetchingStatus(true);
			if (query && query != "") {
				const response: IPaginateResponse = await RequestProducts.Query(query!);
				dispatch(setProductList(response));
			} else {
				const response: IPaginateResponse = await RequestProducts.All();
				dispatch(setProductList(response));
			}
			setFetchingStatus(false);
		}
		setCurrentQuery(query);
		InitialFetch();
	}, [query]);

	return (
		<div className="h-full flex w-fit flex-col mb-[50px]">
			<div className="w-full flex justify-between">
				<section className="w-[65vw] grid gap-y-[10px] gap-x-[10px] justify-between grid-cols-[repeat(4,auto)]">
					{ProductListing?.data?.map((product) => {
						return <ProductMiniature key={product.id} data={product} />;
					})}
				</section>
			</div>
			<div ref={viewRef} className="flex justify-center items-center w-full h-[25px] m-[5px] p-[5px]"></div>
		</div>
	);
}
