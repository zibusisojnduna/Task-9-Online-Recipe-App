import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout'
import Landing from './pages/Landing'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import Recipe from './pages/Recipe'
import Privacy from './pages/Privacy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Landing/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='recipe' element={<Recipe/>}/>
            <Route path='privacy' element={<Privacy/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
