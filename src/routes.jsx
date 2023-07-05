import App from './App'
import LearningGuide from './components/pages/LearningGuide/LearningGuide'
import Help from './components/pages/Help/Help'
import Profile from './components/pages/Profile/Profile'
import BackendAPI from './components/pages/BackendAPI/BackendAPI'
import ReactMERN from './components/pages/ReactMERN/ReactMERN'
import Deployment from './components/pages/Deployment/Deployment'
import FrontendUI from './components/pages/FrontendUI/FrontendUI'

export const homeRoute = {
	path: '/',
	element: <App />,
}

export const learningGuideRoute = {
    path: '/learning-guide',
    element: <LearningGuide />
}

export const helpRoute = {
    path: '/help',
    element: <Help />
}

export const profileRoute = {
    path: '/profile',
    element: <Profile />
}

export const frontendUIRoute = {
    path: '/frontend-ui',
    element: <FrontendUI />
}

export const backendAPIRoute = {
    path: '/backend-api',
    element: <BackendAPI />
}

export const reactMERNRoute = {
    path: '/react',
    element: <ReactMERN />
}

export const deploymentRoute = {
    path: '/deployment',
    element: <Deployment />
}