import s from "./edit-profile.module.scss";
export default function EditProfile() {
	return (
		<>
			<section className={s.edit_profile}>
				<div>
					<span className="font-bebas">Edit your profile</span>
				</div>
				<form>
					<div className={s.fields}>
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
						<div>
							<div>
								<label htmlFor="planet">Planet</label>
								<input id="planet" name="planet" type="text" />
							</div>
							<div>
								<label htmlFor="sector">State/Sector</label>
								<input id="sector" name="sector" type="text" />
							</div>
							<div>
								<label htmlFor="residence_id">Residence ID</label>
								<input id="residence_id" name="residence_id" type="text" />
							</div>
						</div>
						<div>
							<div>
								<label htmlFor="nation">Nation</label>
								<input id="nation" name="nation" type="text" />
							</div>
							<div>
								<label htmlFor="district">City/District</label>
								<input id="district" name="district" type="text" />
							</div>
							<div>
								<label htmlFor="residence_id">Residence ID</label>
								<input id="residence_id" name="residence_id" type="text" />
							</div>
						</div>
					</div>
					<div>
						<button>Apply Changes</button>
						<button>Discard Changes</button>
					</div>
				</form>
			</section>
		</>
	);
}
