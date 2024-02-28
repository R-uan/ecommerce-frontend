export default class UnexpectedError extends Error {
	constructor() {
		super();
		this.message = "An Unexpected Error has Occurred";
	}
}
