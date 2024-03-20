import { ProductQuery } from "@/interfaces/ProductQuery";
import { RootState } from "@/redux/store";
import { RequestProducts } from "@/scripts/requests/RequestProducts";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./filter-options.module.scss";
import { setProductList } from "@/redux/slices/ProductListing";

export default function FilterOptions() {
	const name_input = useRef<HTMLInputElement>(null);
	const manufacturer_input = useRef<HTMLInputElement>(null);
	const [option, setOption] = useState(true);
	const ProductListing = useSelector((s: RootState) => s.product_listing);
	const setState = useDispatch();

	async function ApplyFilters() {
		if (name_input.current) {
			const name = name_input.current.value;
			const request = await RequestProducts.Query(name, ProductQuery.Name);
			setState(setProductList(request));
		} else if (manufacturer_input.current) {
			const manufacturer = manufacturer_input.current.value;
			const request = await RequestProducts.FromManufacturer(manufacturer);
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
					<input type="number" placeholder="0" />
					<span>to</span>
					<input type="number" placeholder="10000000" />
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
