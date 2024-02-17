export default class AuthenticationError extends Error {
	constructor(message: string) {
		super(message);
		this.cause = "Failed to authenticate user based on the provided credentials.";
	}
}
