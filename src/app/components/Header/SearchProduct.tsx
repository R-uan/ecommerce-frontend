import { FaSearch } from "react-icons/fa";
import styles from "./styles/search-product.module.scss";
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
			<div className={styles.main} onClick={() => setIsOpen(!isOpen)}>
				<button onClick={() => setIsOpen(!isOpen)}>
					<FaSearch className={styles.icon} size={25} />
				</button>
			</div>
			{!isOpen ? null : (
				<>
					<div className={styles.search}>
						<form method="get" onSubmit={HandleSubmit}>
							<input name="name" type="text" placeholder="Search" />
							<button type="submit">
								<FaSearch className={styles.icon} size={25} />
							</button>
						</form>
						<div className={styles.outer} onClick={() => setIsOpen(!isOpen)} />
					</div>
				</>
			)}
		</>
	);
}
