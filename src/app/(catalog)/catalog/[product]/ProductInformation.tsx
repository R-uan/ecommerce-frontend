import { FaShoppingCart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import Rating from "./Rating";
import styles from "./singular-product.module.scss";
import { RequestSingleProduct } from "@/scripts/requests/RequestProducts";
import { useProductContext } from "./context/ProductProvider";
import { useEffect } from "react";

export default function ProductInformation({ productId }: { productId: string }) {
	const state = useProductContext();
	const product = state.product;
	async function Default() {
		try {
			state.setFetchStatus(true);
			const response = await RequestSingleProduct(productId);
			if (response) state.setProduct(response);
			state.setFetchStatus(false);
		} catch (error) {
			if (error instanceof Error) {
				state.setErrorMessage(error.message);
				state.setFetchStatus(false);
			}
		}
	}

	useEffect(() => {
		Default();
	}, []);
	return (
		<section className={styles.product_information}>
			<div className="w-[60%] flex flex-col justify-between gap-[30px]">
				<div>
					<Rating />
					<h1 className="text-[3.5vw] leading-[3vw] font-bebas text-[#FF003C]">
						{product?.name}
					</h1>
					<h3 className="text-[2vw] leading-snug">{product?.manufacturer}</h3>
					<h3 className="text-[3vw] leading-[3vw]">${product?.unit_price}</h3>
				</div>

				<div>
					<label
						className="flex flex-col w-[200px] text-[1.5rem] leading-snug mb-[20px]"
						htmlFor="destiny">
						Planet Dropoff
						<select className="bg-[#2E3840]" name="" id="destiny">
							<option value="earth">Earth</option>
							<option value="mars">Mars</option>
							<option value="saturn">Saturn</option>
							<option value="neptune">Neptune</option>
							<option value="uranus">Uranus</option>
							<option value="venus">Venus</option>
							<option value="mercury">Mercury</option>
							<option value="moon">Moon</option>
							<option value="pluto">Pluto</option>
						</select>
					</label>
					<h3 className="text-[1.5vw] leading-[1.5vw]">Delivery Price: ${"10"}</h3>
					<h3 className="text-[1.5vw] leading-[1.5vw]">
						Estimated Time of Production (Pluto Years): 2-3
					</h3>
				</div>
			</div>
			<div className={styles.cb2}>
				<button type="button" className={styles.buy_button}>
					<FaShoppingCart fill="#050A0E" className="text-[1.5vw]" />
					BUY NOW
				</button>
				<button type="button" className={styles.add_to_cart}>
					<FaCartPlus fill="#050A0E" className="text-[1.5vw]" />
				</button>
			</div>
		</section>
	);
}
