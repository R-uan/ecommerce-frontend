import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import s from "./styles/header.module.scss";

export default function HeaderOptions({ transparent = false }: { transparent?: boolean }) {
	const Warships = ["Bombers", "Capital Ships", "Carriers", "Destroyers", "Fighters", "Interceptors"];

	const Exploration_Ships = ["Explorer Vessels", "Generational Vessels"];
	return (
		<div className={s.menu_options}>
			<Link href={"/"}>
				<IoHomeSharp className="text-[1.4vw]" />
			</Link>
			<ul>
				<li key={"warships"}>
					<a href="">Warships</a>
					<ul style={{ backgroundColor: "#eeeeee" }}>
						{Warships.map((ele, key) => {
							return (
								<li key={key}>
									<input type="button" value={ele} />
								</li>
							);
						})}
					</ul>
				</li>
				<li key={"exploration_ships"}>
					<a href="">Exploration Ships</a>
					<ul style={{ backgroundColor: "#eeeeee" }}>
						{Exploration_Ships.map((ele, key) => {
							return (
								<li key={key}>
									<input type="button" value={ele} />
								</li>
							);
						})}
					</ul>
				</li>
				<li key={"cargo_ships"}>
					<a href="">Cargo Ships</a>
				</li>
				<li key={"catalog"}>
					<Link href={"/catalog"}>Catalog</Link>
				</li>
			</ul>
		</div>
	);
}
