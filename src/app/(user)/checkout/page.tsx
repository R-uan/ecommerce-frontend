import CheckoutProvider from "./contexts/CheckoutContext";
import ProductMapping from "./components/ProductMapping";
import OrderOverview from "./components/OrderOverview";
import s from "./styles/checkout.module.scss";

export default function Checkout() {
	// TODO Validate the logic of the transfer of state from catalog to checkout
	// TODO Favourites Page
	return (
		<main className={s.main}>
			<div className={s.checkout}>
				<CheckoutProvider>
					<ProductMapping />
					<OrderOverview />
				</CheckoutProvider>
			</div>
		</main>
	);
}
