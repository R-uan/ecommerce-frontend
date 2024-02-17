export class RegistrationError extends Error {
	constructor(message: string) {
		super(message);
		this.cause = "Failed to register the user based on the credetials received.";
	}
}
