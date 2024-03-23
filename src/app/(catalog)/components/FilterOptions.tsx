import { QueryParams, QueryType } from "@/interfaces/ICatalogQueries";
import { RootState } from "@/redux/store";
import Util from "@/scripts/utils/Query";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import s from "./filter-options.module.scss";

export default function FilterOptions() {
	// TODO Filter by category and availability
	const router = useRouter();
	const [option, setOption] = useState(true);
	const min_price = useRef<HTMLInputElement>(null);
	const max_price = useRef<HTMLInputElement>(null);
	const product_input = useRef<HTMLInputElement>(null);
	const manufacturer_input = useRef<HTMLInputElement>(null);
	const product_listing = useSelector((s: RootState) => s.product_listing);

	async function ApplyFilters() {
		const product = product_input.current ? product_input.current.value : null;
		const manufacturer = manufacturer_input.current ? manufacturer_input.current.value : null;
		const minp = min_price.current ? min_price.current.value : null;
		const maxp = max_price.current ? max_price.current.value : null;
		const type = manufacturer ? QueryType.Manufacturer : QueryType.Product;
		const params: QueryParams = {
			name: product ?? manufacturer ?? null,
			price: {
				min: minp,
				max: maxp,
			},
		};
		const query = Util.QueryBuilder(params, type);
		router.push(`/catalog${query}`);
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
					<input ref={product_input} type="text w-full bg-white" placeholder="Enter name" />
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
					Showing {product_listing.data?.length} of {product_listing.total}
				</span>
			</div>
		</div>
	);
}
