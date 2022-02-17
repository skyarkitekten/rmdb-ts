import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	:root {
		--max-width: 1280px;
		--white: #fff;
		--lightGrey: #eee;
		--medGrey: #353535;
		--darkGrey: #2c2c2c;
		--fontXtraLarge: 2.0rem;
		--fontLarge: 1.5rem;
		--fontMedium: 1.25rem;
		--fontSmall: 1.0rem;
	}

	* {
		box-sizing: border-box;
		font-family: 'Abel', sans-serif;
	}

	body {
		padding: 0;
		margin: 0;

		h1{
			font-size: 2.5rem;
			font-weight: 600;
			color: var(--white);
		}

		h3{
			font-size: var(--fontLarge);
			font-weight: 600;
		}

		p{
			font-size: var(--fontSmall);
			color: var(--white);
		}
	}
`;
