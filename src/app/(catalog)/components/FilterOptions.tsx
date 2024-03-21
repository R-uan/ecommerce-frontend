import { useRef, useState } from "react";
import { RootState } from "@/redux/store";
import s from "./filter-options.module.scss";
import { QueryType } from "@/interfaces/QueryType";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "@/redux/slices/ProductListing";
import { FilterType, RequestProducts } from "@/scripts/requests/RequestProducts";

export default function FilterOptions() {
	const setState = useDispatch();
	const [option, setOption] = useState(true);
	const min_price = useRef<HTMLInputElement>(null);
	const max_price = useRef<HTMLInputElement>(null);
	const name_input = useRef<HTMLInputElement>(null);
	const manufacturer_input = useRef<HTMLInputElement>(null);
	const ProductListing = useSelector((s: RootState) => s.product_listing);

	async function ApplyFilters() {
		const price_range = { min: min_price.current?.value, max: max_price.current?.value };
		if (name_input.current?.value) {
			const name = name_input.current.value;
			const request = await RequestProducts.CatalogFilter({ name: name, price: price_range }, FilterType.Product);
			setState(setProductList(request));
		} else if (manufacturer_input.current?.value) {
			const manufacturer = manufacturer_input.current.value;
			const request = await RequestProducts.CatalogFilter({ name: manufacturer, price: price_range }, FilterType.Manufacturer);
			setState(setProductList(request));
		} else {
			const request = await RequestProducts.CatalogFilter({ price: price_range }, FilterType.Price);
			setState(setProductList(request));
		}
	}

	return (
		<div className={s.aside}>
			<div className={s.search_options}>
				<a href="#" onClick={() => setOption(!option)} className={s.search_choice}>
					<span className={option ? s.selected : ""}>Name</span>
					<span>|</span>
					<span className={!option ? s.selected : ""}>Manufacturer</span>
				</a>
				{option ? (
					<input ref={name_input} type="text w-full bg-white" placeholder="Enter name" />
				) : (
					<input ref={manufacturer_input} type="text w-full bg-white" placeholder="Enter manufacturer" />
				)}
			</div>
			<div className={s.price_options}>
				<span>Price Range</span>
				<div className={s.price_range}>
					<input ref={min_price} type="number" placeholder="0" />
					<span>to</span>
					<input ref={max_price} type="number" placeholder="10000000" />
				</div>
			</div>
			<div className={s.buttons}>
				<button onClick={ApplyFilters} className={s.apply_filters}>
					Apply Filters
				</button>
			</div>
			<div className={s.found}>
				<span>
					Showing {ProductListing.data?.length} of {ProductListing.total}
				</span>
			</div>
		</div>
	);
}
