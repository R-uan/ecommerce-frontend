import Header from "@/app/components/Header/Header";
import { ReactNode } from "react";

export default function CheckoutLayout({ children }: { children: ReactNode }) {
	return (
		<body className="flex flex-col h-[100vh] w-full bg-[#050a0e]">
			<Header abs={false} bg={true} />
			{children}
		</body>
	);
}
