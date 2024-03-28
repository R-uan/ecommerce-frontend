import CheckoutProvider from "./contexts/CheckoutContext";
import ItensMap from "./ItensMap";
import OrderOverview from "./OrderOverview";
import s from "./checkout.module.scss";

export default function Checkout() {
	return (
		<main className={s.main}>
			<div className={s.checkout}>
				<CheckoutProvider>
					<ItensMap />
					<OrderOverview />
				</CheckoutProvider>
			</div>
		</main>
	);
}
