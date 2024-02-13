import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function SearchBar() {
	const router = useRouter();
	async function RedirectSearch(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const queryValue = event.currentTarget.query_input.value;
		router.push(`/products/search?q=${queryValue}`);
	}

	return (
		<>
			<form onSubmit={RedirectSearch}>
				<input type="text" name="query_input" />
				<button type="submit">BT</button>
			</form>
		</>
	);
}
