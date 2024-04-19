import styled from "styled-components";

interface StyleProps {
	$bg: boolean;
	$abs: boolean;
}
export const StyledHeader = styled.header<StyleProps>`
	width: 100%;
	z-index: 101;
	display: flex;
	align-items: center;
	padding: 0px 4vw 0px 4vw;
	height: clamp(70px, 6vw, 6vw);
	min-height: clamp(70px, 6vw, 6vw);
	position: ${({ $abs }) => ($abs ? "absolute" : "relative")};
	background-color: ${({ $bg }) => ($bg ? "#eeeeee" : "transparent")};

	& > div:last-child {
		gap: 15px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.right_icons {
		gap: clamp(5px, 1vw, 15px);
		height: 50%;
		display: flex;
		z-index: 101;
		width: fit-content;
		align-items: center;
		justify-content: center;

		.icon {
			font-size: clamp(1.25rem, 1.5vw, 1.75rem);
		}
	}
`;
