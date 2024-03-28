import { RequestProducts } from "@/scripts/requests/RequestProducts";
import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { useProductContext } from "../context/ProductProvider";
import styles from "../singular-product.module.scss";
import PlanetDestination from "./PlanetDestination";
import Rating from "./Rating";

export default function ProductInformation({ productId }: { productId: string }) {
	const state = useProductContext();
	const product = state.product;

	function AddToCart() {
		const storage = localStorage.getItem("cart");
		if (storage && product) {
			const cart: { products: number[] } = JSON.parse(storage);
			cart.products.includes(product.id) ? null : cart.products.push(product.id);
			localStorage.setItem("cart", JSON.stringify(cart));
		} else if (!storage && product) {
			const cart: { products: number[] } = { products: [product.id] };
			localStorage.setItem("cart", JSON.stringify(cart));
		}
	}

	useEffect(() => {
		async function Default() {
			try {
				state.setFetchStatus(true);
				const response = await RequestProducts.One(productId);
				if (response) state.setProduct(response);
				state.setFetchStatus(false);
			} catch (error) {
				if (error instanceof Error) {
					state.setErrorMessage(error.message);
					state.setFetchStatus(false);
				}
			}
		}

		Default();
	}, []);

	return (
		<section className={styles.product_information}>
			<div className="w-[60%] flex flex-col justify-between gap-[30px]">
				<div>
					<Rating />
					<h1 className="text-[3.5vw] leading-[3vw] font-bebas text-[#FF003C]">{product?.name}</h1>
					<p className="text-[2vw] leading-snug text-white">{product?.manufacturer}</p>
					<p className="text-[3vw] leading-[3vw] text-white">${product?.unit_price}</p>
					<p className="text-[1.5vw] leading-[1.5vw] text-white">+7% taxes</p>
				</div>

				<div className="text-all-white">
					<PlanetDestination />
					<h3 className="text-[1.5vw] leading-[1.5vw]">
						Estimated Time of Production: {state.product?.production_time} Pluto Years
					</h3>
				</div>
			</div>
			<div className={styles.cb2}>
				<button type="button" className={styles.buy_button}>
					<FaShoppingCart fill="#050A0E" className="text-[1.5vw]" />
					BUY NOW
				</button>
				<button onClick={AddToCart} type="button" className={styles.add_to_cart}>
					<FaCartPlus fill="#050A0E" className="text-[1.5vw]" />
				</button>
			</div>
		</section>
	);
}
