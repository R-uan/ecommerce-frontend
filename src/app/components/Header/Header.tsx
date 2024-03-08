"use client";
import { store } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Provider } from "react-redux";
import HeaderOptions from "./HeaderOptions";
import User from "./User";
import Link from "next/link";

export default function Header({ transparent = false, color = "black", absolute = false }: { transparent?: boolean; color?: string; absolute?: boolean }) {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	async function HandleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const input = event.target as HTMLFormElement;
		const value = (input.elements.namedItem("name") as HTMLInputElement).value;
		const format = value.split(" ").join("_");
		router.push(`/catalog?name=${format}`);
	}

	return (
		<Provider store={store}>
			<header
				style={{ backgroundColor: transparent ? "transparent" : "#eeeeee", position: absolute ? "absolute" : "relative" }}
				className={`z-[101] top-0 justify-between items-center relative flex h-[6vw] w-full shadow-[0px_5px_20px_0px_rgba(0,0,0,0.05)] p-px text-all-${color}`}>
				{isOpen ? null : <HeaderOptions transparent />}
				<div className="px-[40px] h-full items-center justify-between w-full flex gap-[15px]">
					<User />
					<div className="flex gap-[15px] w-fit h-[50%] justify-center items-center">
						<div className="h-fit flex items-center" onClick={() => setIsOpen(!isOpen)}>
							<button onClick={() => setIsOpen(!isOpen)}>
								<FaSearch className="text-[1.4vw]" />
							</button>
						</div>
						{!isOpen ? null : (
							<div className="flex justify-center items-center z-0 absolute w-full overflow-auto h-full right-0 top-0">
								<form className="z-[1] flex items-center w-[40%] h-[50%] relative" method="get" onSubmit={HandleSubmit}>
									<input
										style={{ backgroundColor: transparent ? "transparent" : "#050A0E", color: "white" }}
										className="z-[5] text-[clamp(1.5rem,1.75vw,1.75vw)] leading-[clamp(1.5rem,1.75vw,1.75vw)] w-full h-[70%] pl-[5px] pr-[50px] rounded-[5px]  shadow-[0px_5px_20px_0px_rgba(0,0,0,0.5)]"
										name="name"
										type="text"
										placeholder="Search"
									/>
									<button className="z-[5] right-[10px] absolute" type="submit">
										<FaSearch fill={"white"} className="text-[1.55vw]" />
									</button>
								</form>
								<div className="z-[-1] absolute w-screen bg-transparent h-full right-0 top-0" onClick={() => setIsOpen(!isOpen)} />
							</div>
						)}
						<div>
							<Link href="/checkout">
								<FaShoppingCart className="text-[1.4vw]" />
							</Link>
						</div>
					</div>
				</div>
			</header>
		</Provider>
	);
}
