import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { backendAPIRoute, frontendUIRoute, helpRoute, homeRoute, learningGuideRoute, profileRoute, reactMERNRoute, deploymentRoute } from './routes.jsx'

const router = createBrowserRouter([
  homeRoute,
  learningGuideRoute,
  helpRoute,
  profileRoute,
  frontendUIRoute,
  backendAPIRoute,
  reactMERNRoute,
  deploymentRoute,
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
