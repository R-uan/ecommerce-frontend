import React from "react";
import { useRouter } from "next/navigation";
import s from "../styles/search.module.scss";

export default function Search({ bg }: { bg: boolean }) {
	const router = useRouter();
	async function HandleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const input = event.target as HTMLFormElement;
		const value = (input.elements.namedItem("name") as HTMLInputElement).value;
		const format = value.split(" ").join("_");
		router.push(`/catalog?q=product&name=${format}`);
	}

	return (
		<div className={s.search_bar}>
			<form method="get" onSubmit={HandleSearchSubmit}>
				<input
					style={{ backgroundColor: bg ? "#050A0E" : "transparent", color: "white" }}
					name="name"
					type="text"
					placeholder="Search"
				/>
			</form>
		</div>
	);
}
