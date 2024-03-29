"use client";
import { QueryParams, QueryType } from "@/interfaces/ICatalogQueries";
import IPaginateResponse from "@/interfaces/IPaginateResponse";
import { setPagination, setProductList } from "@/redux/slices/ProductListing";
import { RootState } from "@/redux/store";
import { RequestProducts } from "@/scripts/requests/RequestProducts";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import ProductMiniature from "./ProductMiniature";
import s from "./catalog.module.scss";

export default function ProductMap() {
	const dispatch = useDispatch();
	const searchParams = useSearchParams();
	const [fetchingStatus, setFetchingStatus] = useState(false);
	const [viewRef, inView] = useInView({ onChange: HandleNextPage });
	const [currentQuery, setCurrentQuery] = useState<string | null>(null);
	const product_listing = useSelector((s: RootState) => s.product_listing);

	async function HandleNextPage() {
		if (product_listing.current_page === product_listing.last_page) return;
		if (!inView && !fetchingStatus) {
			if (product_listing.next_page_url && currentQuery === query) {
				const next_page = await RequestProducts.Paginate(product_listing.next_page_url);
				next_page ? dispatch(setPagination(next_page)) : null;
			}
		}
	}

	const query = searchParams.get("q");
	const name = searchParams.get("name");
	const availability = searchParams.get("av");
	const min_price = searchParams.get("minp");
	const max_price = searchParams.get("maxp");
	useEffect(() => {
		console.log(searchParams.values());
		async function InitialFetch() {
			setFetchingStatus(true);
			let response: IPaginateResponse;
			if (query && query != "") {
				const table =
					query && query == "manufacturers"
						? QueryType.Manufacturer
						: query == "products"
						? QueryType.Product
						: QueryType.Price;
				const params: QueryParams = {
					name: name,
					availability: availability,
					price: { min: min_price, max: max_price },
				};
				response = await RequestProducts.QueryHandler(params, table);
			} else response = await RequestProducts.All();
			dispatch(setProductList(response));
			setFetchingStatus(false);
		}
		setCurrentQuery(query);
		InitialFetch();
	}, [query, name, availability, min_price, max_price]);

	return (
		<div className={s.product_map}>
			<div>
				<section>
					{product_listing?.data?.map((product) => {
						return <ProductMiniature key={product.id} data={product} />;
					})}
				</section>
			</div>
			<div ref={viewRef} className="flex justify-center items-center w-full h-[25px] m-[5px] p-[5px]" />
		</div>
	);
}
