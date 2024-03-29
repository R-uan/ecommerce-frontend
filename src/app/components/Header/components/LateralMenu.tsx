import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import s from "../styles/lateral-menu.module.scss";

export default function LateralMenu() {
	const [isOpen, setStatus] = useState(false);
	const Exploration_Ships = ["Explorer Vessels", "Generational Vessels"];
	const Warships = ["Bombers", "Capital Ships", "Carriers", "Destroyers", "Fighters", "Interceptors"];

	return (
		<div className={s.lateral_menu}>
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
