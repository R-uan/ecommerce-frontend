import s from "../styles/my-address.module.scss";
import parent from "../styles/update-profile.module.scss";

export default function MyAddress() {
	return (
		<div className={s.my_address}>
			<span className="font-bebas">MY ADDRESS</span>
			<form action="">
				<div className={parent.fields}>
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
				<div className={s.submit}>
					<button>Save Address</button>
				</div>
			</form>
		</div>
	);
}
