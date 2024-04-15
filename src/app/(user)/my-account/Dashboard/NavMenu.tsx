import { FaGithub } from "react-icons/fa6";
import MyOrders from "./MyOrders/MyOrders";
import s from "./styles/nav-menu.module.scss";
import { useDashboardContext } from "./ContextProvider/DashboardProvider";
import UpdateProfile from "./Profile/UpdateProfile";
export default function NavMenu() {
	const { setView } = useDashboardContext();

	const options = [
		{
			view: { name: "My Orders", component: <MyOrders /> },
			icon: <FaGithub className={s.icon} fill="black" />,
		},
		{
			view: { name: "Update Profile", component: <UpdateProfile /> },
			icon: <FaGithub className={s.icon} fill="black" />,
		},
	];

	return (
		<div className={s.nav_menu}>
			{options.map((ele) => {
				return (
					<div onClick={() => setView(ele.view)}>
						{ele.icon}
						<span>{ele.view.name}</span>
					</div>
				);
			})}
		</div>
	);
}
