import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './components/pages/LandingPage/LandingPage'
import Layout from './components/Layout/Layout'
import FrontendUI from './components/pages/FrontendUI/FrontendUI'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LandingPage />}/>
        <Route path='frontend-ui' element={<FrontendUI />}>
          {/* adding children to frontend-ui */}
        </Route>
      </Route>
    </Routes>
  )
}

export default App
