import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchProduct() {
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
		<>
			<div className="h-fit flex items-center" onClick={() => setIsOpen(!isOpen)}>
				<button onClick={() => setIsOpen(!isOpen)}>
					<FaSearch size={25} />
				</button>
			</div>
			{!isOpen ? null : (
				<>
					<div className="flex justify-center items-center z-0 absolute w-screen overflow-auto h-full right-0 top-0">
						<form
							className="z-[1] flex items-center w-6/12 h-3/6 relative"
							method="get"
							onSubmit={HandleSubmit}>
							<input
								className="z-[5] text-[clamp(1.5rem,2vw,2vw)] w-full h-full pl-[5px] pr-[45px] rounded-[5px]"
								name="name"
								type="text"
								placeholder="Search"
							/>
							<button className="z-[5] right-[5px] absolute" type="submit">
								<FaSearch size={25} />
							</button>
						</form>
						<div
							className="z-[-1] absolute w-screen bg-[rgba(0,0,0,0.4)] h-full right-0 top-0"
							onClick={() => setIsOpen(!isOpen)}
						/>
					</div>
				</>
			)}
		</>
	);
}
