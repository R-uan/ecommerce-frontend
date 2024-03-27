import { useRouter } from "next/navigation";
import React, { SetStateAction } from "react";
import { FaSearch } from "react-icons/fa";

export default function HeaderSearch({
	transparent,
	setIsOpen,
}: {
	transparent: boolean;
	setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
	const router = useRouter();
	async function HandleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const input = event.target as HTMLFormElement;
		const value = (input.elements.namedItem("name") as HTMLInputElement).value;
		const format = value.split(" ").join("_");
		router.push(`/catalog?q=product&name=${format}`);
	}

	return (
		<div className="flex justify-center items-center z-0 absolute w-full overflow-auto h-full right-0 top-0">
			<form className="z-[1] flex items-center w-[40%] h-[50%] relative" method="get" onSubmit={HandleSearchSubmit}>
				<input
					style={{ backgroundColor: transparent ? "transparent" : "#050A0E", color: "white" }}
					className="z-[5] text-[clamp(1.5rem,1.75vw,1.75vw)] leading-[clamp(1.5rem,1.75vw,1.75vw)] w-full h-[70%] pl-[5px] pr-[50px] rounded-[5px] shadow-[0px_5px_20px_0px_rgba(0,0,0,0.5)]"
					name="name"
					type="text"
					placeholder="Search"
				/>
				<button className="z-[5] right-[10px] absolute" type="submit">
					<FaSearch fill={"white"} className="text-[1.55vw]" />
				</button>
			</form>
			<div className="z-[-1] absolute w-screen bg-transparent h-full right-0 top-0" onClick={() => setIsOpen(false)} />
		</div>
	);
}
