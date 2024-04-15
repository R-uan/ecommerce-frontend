import s from "../styles/my-information.module.scss";
import parent from "../styles/update-profile.module.scss";

export default function MyInformation() {
	return (
		<div className={s.my_info}>
			<span className="font-bebas">MY INFORMATION</span>
			<form action="">
				<div className={parent.fields}>
					<div>
						<div>
							<label htmlFor="fname">First name</label>
							<input id="fname" name="fname" type="text" />
						</div>
						<div>
							<label htmlFor="email"> Email</label>
							<input id="email" name="email" type="email" />
						</div>
						<div>
							<label htmlFor="citzen_id">Citzen ID</label>
							<input id="citzen_id" name="citzen_id" type="text" />
						</div>
						<div>
							<label htmlFor="password"> Password</label>
							<input id="password" name="password" type="password" />
						</div>
					</div>
					<div>
						<div>
							<label htmlFor="lname">Last name</label>
							<input id="lname" name="lname" type="text" />
						</div>
						<div>
							<label htmlFor="phone_number">Phone number</label>
							<input id="phone_number" name="phone_number" type="tel" />
						</div>
						<div>
							<label htmlFor="date_of_birth">Date of birth</label>
							<input id="date_of_birth" name="date_of_birth" type="date" />
						</div>
						<div>
							<label htmlFor="cpassword">Confirm password</label>
							<input id="cpassword" name="cpassword" type="password" />
						</div>
					</div>
				</div>
				<div className={s.submit}>
					<button>Apply Changes</button>
				</div>
			</form>
		</div>
	);
}
