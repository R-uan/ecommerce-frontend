import type { Metadata } from "next";
import Link from "next/link";
import { GiRingedPlanet } from "react-icons/gi";
import "../globals.css";

export const metadata: Metadata = {
	title: "Gemini Authentication",
};

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<body className="bg-[#0f0f0f]">
			<main className="flex flex-row w-screen h-screen">
				<div className="relative bg-[#151515] flex-col items-center justify-center w-[500px] flex h-full shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px]">
					<div>
						<Link href={"/"}>
							<GiRingedPlanet fill="white" size={70} />
						</Link>
					</div>
					{children}
				</div>
				<div className="bg-white flex flex-1 bg-auth_bg bg-cover" />
			</main>
		</body>
	);
}
