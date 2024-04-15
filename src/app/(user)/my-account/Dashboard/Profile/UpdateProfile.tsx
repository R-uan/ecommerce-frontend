import MyAddress from "./MyAddress";
import MyInformation from "./MyInformation";
import s from "../styles/update-profile.module.scss";

export default function UpdateProfile() {
	return (
		<section className={s.edit_profile}>
			<div>
				<span className="font-bebas">Edit your profile</span>
			</div>
			<div>
				<MyInformation />
				<MyAddress />
			</div>
		</section>
	);
}
