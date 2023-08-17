import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import { StrictMode } from 'react'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
	<Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
)
