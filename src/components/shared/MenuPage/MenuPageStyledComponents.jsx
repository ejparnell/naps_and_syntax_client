import { styled } from 'styled-components'

export const MenuContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-column-gap: 10px;
	grid-row-gap: 10px;
	height: 100vh;
	width: 100vw;
	background-color: ${props => props.theme.colors.background};
	padding: 40px;
	box-sizing: border-box;
`

export const MenuPageItem1 = styled.div`
	grid-area: 1 / 1 / 2 / 2;
	background-color: ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts.headerFont};
	color: ${(props) => props.theme.colors.primary};
	font-size: 3vmin;
	padding: 20px;
	border-radius: 30px 35px 35px 30px;
	text-align: center;
`

export const MenuPageHeroText = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
`

export const MenuPageItem2 = styled.div`
	font-size: 3vmin;
	padding: 20px;
	border-radius: 30px 35px 35px 30px;
	text-align: center;
	grid-area: 1 / 2 / 2 / 3;
	background-color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.fonts.bodyFont};
	color: ${(props) => props.theme.colors.white};
`

export const MenuPageText = styled.div`
	height: 50%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
`
export const MenuPageTextLong = styled.div`
	height: 33%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const MenuPageArrowContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	height: 50%;
	width: 100%;
`

export const MenuPageItem3 = styled.div`
	font-size: 3vmin;
	padding: 20px;
	border-radius: 30px 35px 35px 30px;
	text-align: center;
	grid-area: 1 / 3 / 2 / 5;
	background-color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.fonts.bodyFont};
	color: ${(props) => props.theme.colors.white};
`

export const MenuPageItem4 = styled.div`
	font-size: 3vmin;
	padding: 20px;
	border-radius: 30px 35px 35px 30px;
	text-align: center;
	grid-area: 2 / 1 / 4 / 2;
	background-color: ${(props) => props.theme.colors.secondary};
	font-family: ${(props) => props.theme.fonts.bodyFont};
	color: ${(props) => props.theme.colors.white};
`

export const MenuPageImageLong = styled.div`
	height: 33%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const MenuPageArrowContainerLong = styled.div`
	height: 33%;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
`

export const MenuPageItem5 = styled.div`
	grid-area: 2 / 2 / 3 / 3;
	background-color: ${(props) => props.theme.colors.secondary};
	font-family: ${(props) => props.theme.fonts.bodyFont};
	color: ${(props) => props.theme.colors.white};
	font-size: 3vmin;
	padding: 20px;
	border-radius: 30px 35px 35px 30px;
	text-align: center;
`

export const MenuPageItem6 = styled.div`
	font-size: 3vmin;
	padding: 20px;
	border-radius: 30px 35px 35px 30px;
	text-align: center;
	grid-area: 3 / 2 / 4 / 3;
	background-color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.fonts.bodyFont};
	color: ${(props) => props.theme.colors.white};
	text-align: center;
`

export const MenuPageItem7 = styled.div`
	grid-area: 2 / 3 / 4 / 4;
	background-color: ${(props) => props.theme.colors.secondary};
	font-family: ${(props) => props.theme.fonts.bodyFont};
	color: ${(props) => props.theme.colors.white};
	font-size: 3vmin;
	padding: 20px;
	border-radius: 30px 35px 35px 30px;
	text-align: center;
`

export const MenuPageItem8 = styled.div`
	font-size: 3vmin;
	padding: 20px;
	border-radius: 30px 35px 35px 30px;
	text-align: center;
	grid-area: 2 / 4 / 4 / 5;
	background-color: ${(props) => props.theme.colors.tertiary};
	font-family: ${(props) => props.theme.fonts.bodyFont};
	color: ${(props) => props.theme.colors.white};
`