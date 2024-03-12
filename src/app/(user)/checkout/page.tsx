import { store } from "@/redux/store";
import { Provider } from "react-redux";
import ItensMap from "./ItensMap";
import CheckoutProvider from "./contexts/CheckoutContext";
import OrderOverview from "./OrderOverview";

export default function Checkout() {
	return (
		<main className="w-full h-full flex-1 bg-black p-[20px]">
			<div className="flex flex-row bg-[white] gap-[15px] justify-between w-full h-[40vw] p-[10px] rounded-md">
				<CheckoutProvider>
					<div className="flex flex-col gap-[10px] rounded-md w-[70%] h-full overflow-auto">
						<ItensMap />
					</div>
					<div className="flex flex-col gap-[5px] bg-[#eeeeee] rounded-md w-[30%] p-[10px]">
						<OrderOverview />
					</div>
				</CheckoutProvider>
			</div>
		</main>
	);
}
