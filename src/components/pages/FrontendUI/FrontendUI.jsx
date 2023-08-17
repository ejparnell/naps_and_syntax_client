import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import {
	faListCheck,
	faLaptopCode,
} from '@fortawesome/free-solid-svg-icons'
import {
	FONTS,
	MENU_THEME_DARK_BLUE,
	MENU_THEME_LIGHT_BLUE,
	MENU_THEME_DARK_PINK,
	MENU_THEME_LIGHT_PINK,
} from '../../shared/theme-constants'
import MenuPage from '../../shared/MenuPage/MenuPage'

export default function FrontendUI() {
	const [theme, setTheme] = useState(MENU_THEME_DARK_BLUE)

	useEffect(() => {
		const themes = [MENU_THEME_DARK_BLUE, MENU_THEME_DARK_PINK, MENU_THEME_LIGHT_BLUE, MENU_THEME_LIGHT_PINK]
		const randomThemeIndex = Math.floor(Math.random() * 4)
		setTheme(themes[randomThemeIndex])
	},[])

	const lessons = {
		name: 'FRONTEND UI',
		content: [
			{
				title: 'JavaScript',
				url: '/javascript',
				img: {},
			},
			{
				title: 'HTML5 + CSS3 + Tailwind',
				url: '/html-css-tailwind',
				img: {},
			},
			{
				title: 'The DOM',
				url: '/dom',
				img: {},
			},
			{
				title: 'Fetch API',
				url: '/fetch-api',
				img: {},
			},
			{
				title: 'Frontend UI Project',
				url: '/frontend-ui-project',
				img: faListCheck
			},
			{
				title: 'Practice',
				url: '/practice',
				img: faLaptopCode,
			}
		],
	}

	return (
		<ThemeProvider theme={{ colors: theme, fonts: FONTS }}>
			<MenuPage
				lessons={lessons}
			/>
		</ThemeProvider>
	)
}
