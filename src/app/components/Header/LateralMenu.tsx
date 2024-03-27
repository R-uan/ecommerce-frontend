import { useSelector } from "react-redux";
import s from "./styles/header.module.scss";
import User from "./User";
import { RootState } from "@/redux/store";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
export default function LateralMenu() {
	const state = useSelector((s: RootState) => s.authentication);
	const [isOpen, setStatus] = useState(false);

	const Warships = ["Bombers", "Capital Ships", "Carriers", "Destroyers", "Fighters", "Interceptors"];
	const Exploration_Ships = ["Explorer Vessels", "Generational Vessels"];
	return (
		<div className={s.menu}>
			<div>
				<button onClick={() => setStatus(!isOpen)}>
					<IoMenuSharp className={s.menu_button} />
				</button>
			</div>
			{!isOpen ? null : (
				<nav className={s.lateral_bar}>
					<div className="w-full h-[10%]">
						<button onClick={() => setStatus(!isOpen)}>
							<IoMenuSharp className={s.menu_button} fill="white" />
						</button>
					</div>
					<div className={s.nav}>
						<ul>
							<li>Home</li>
							<li>Catalog</li>
							<hr />
							<span>Warships</span>
							{Warships.map((ele, key) => {
								return (
									<li key={key}>
										<input type="button" value={ele} />
									</li>
								);
							})}
							<hr />
							<span>Exploration Ships</span>
							{Exploration_Ships.map((ele, key) => {
								return (
									<li key={key}>
										<input type="button" value={ele} />
									</li>
								);
							})}
						</ul>
					</div>
					<div className={s.user}>
						<div>
							<button>Login</button>
						</div>
					</div>
				</nav>
			)}
		</div>
	);
}
