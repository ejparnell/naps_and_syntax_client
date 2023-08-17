import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { ThemeProvider } from 'styled-components'
import {
	FONTS,
	MENU_THEME_DARK_BLUE,
} from '../../shared/theme-constants'
import MenuPage from '../../shared/MenuPage/MenuPage'
import './LandingPage.css'

export default function LandingPage() {

	const lessons = {
		name: 'NAPS + SYNTAX',
		content: [
			{
				title: 'Learning Guide',
				url: '/learning-guide',
				img: {},
			},
			{
				title: 'Need Help?',
				url: '/need-help',
				img: {},
			},
			{
				title: 'Frontend UI',
				url: '/frontend-ui',
				img: {},
			},
			{
				title: 'Backend API + Node.js',
				url: '/backend-api',
				img: {},
			},
			{
				title: 'React + MERN-Stack',
				url: '/react',
				img: faReact
			},
			{
				title: 'Deployment',
				url: '/deployment',
				img: faRocket,
			}
		],
	}

	return (
		<ThemeProvider theme={{ colors: MENU_THEME_DARK_BLUE, fonts: FONTS }}>
			<MenuPage lessons={lessons} />
		</ThemeProvider>
	)
}
