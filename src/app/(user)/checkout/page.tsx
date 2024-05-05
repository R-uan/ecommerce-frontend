import CheckoutProvider from "./contexts/CheckoutContext";
import ProductMapping from "./components/ProductMapping";
import OrderOverview from "./components/OrderOverview";
import s from "./styles/checkout.module.scss";

export default function Checkout() {
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
