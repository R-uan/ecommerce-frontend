"use client";
import { NotFoundStyled } from "./NotFoundStyled";

export default function NotFound() {
	return (
		<NotFoundStyled>
			<div>
				<h1 className="font-bebas">404</h1>
				<h3 className="font-bebas">NOT FOUND</h3>
				<br />
				<p>
					The requested content was not found. <br />
					Please double check the resource's url or try again later.
				</p>
			</div>
			<span>domain.com/url/url/url/url/url/url</span>
		</NotFoundStyled>
	);
}
