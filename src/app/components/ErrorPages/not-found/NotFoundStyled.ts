import styled from "styled-components";

export const NotFoundStyled = styled.main`
	flex: 1;
	gap: 15px;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;

	& > * {
		color: white;
	}

	& > span {
		top: 0;
		left: 5px;
		position: absolute;
	}

	& > div {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		& > h1 {
			margin: 0;
			height: fit-content;
			font-size: clamp(4rem, 13vw, 13rem);
			line-height: clamp(4rem, 10vw, 10rem);
		}

		& > h3 {
			margin: 0;
			font-size: clamp(2rem, 10vw, 3rem);
			line-height: clamp(2rem, 10vw, 2.5rem);
		}

		& > p {
			margin: 0;
			text-align: center;
			font-size: clamp(1.5rem, 5vw, 2rem);
			line-height: clamp(1.5rem, 5vw, 2rem);
		}
	}
`;
