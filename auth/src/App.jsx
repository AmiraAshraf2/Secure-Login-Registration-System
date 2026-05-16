import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login/Login'
import Registration from './pages/Registration/Registration'
import ProtectedRouter from './components/ProtectedRouter'
import Home from './pages/Home/Home'

function App() {


  return (
    <>

      <Navbar />

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/registr' element={<Registration />} />

        <Route path='/' element={
          <ProtectedRouter>
            <Home />
          </ProtectedRouter>
        } />
      </Routes>


    </>
  )
}

export default App
