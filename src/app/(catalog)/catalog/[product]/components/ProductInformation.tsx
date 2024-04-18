import { RequestProducts } from "@/scripts/requests/RequestProducts";
import { FaHeart } from "react-icons/fa";

import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { useProductContext } from "../context/ProductProvider";
import styles from "../singular-product.module.scss";
import PlanetDestination from "./PlanetDestination";
import Rating from "./Rating";

export default function ProductInformation({ product_slug }: { product_slug: string }) {
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
				const response = await RequestProducts.One(product_slug);
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
			<div className={styles.main_information}>
				<div>
					<Rating />
					<h1 className="font-bebas">{product?.name}</h1>
					<p className={styles.manufacturer}>{product?.manufacturer}</p>
					<p className={styles.price}>${product?.unit_price}</p>
					<p className={styles.price_additional}>+7% taxes</p>
				</div>

				<div>
					<PlanetDestination />
					<h3>Estimated Time of Production: {state.product?.production_time} Pluto Years</h3>
				</div>
			</div>
			<div className={styles.options}>
				<div className={styles.payment_information}>
					<span>Payment Methods</span>
					<p>Money</p>
					<p>Credit Card</p>
					<p>Crypto Currency</p>
					<p>Ilegal Methods</p>
				</div>
				<button type="button" className={styles.buy}>
					<FaShoppingCart fill="#050A0E" className="text-[1.5vw]" />
					BUY NOW
				</button>
				<button onClick={AddToCart} type="button" className={styles.add_to_cart}>
					<FaCartPlus fill="#050A0E" className="text-[1.5vw]" />
				</button>
				<button className={styles.favourite}>
					<FaHeart fill="#FF003C" className="w-full h-full" />
				</button>
			</div>
		</section>
	);
}
