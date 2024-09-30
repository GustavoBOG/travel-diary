import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home/Home'
import Login from './routes/Login/Login'
import Header from './Routes/Header/Header'
import Register from './Routes/Register/Register'
import './App.css'
import Front from './Routes/Front/Front'


function App() {


  return (
    <>
    <Header/>
      <Routes>
        
        <Route path="/" element={<Front />} />
        <Route path="home" element={<Home />}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

      </Routes>
    </>
  )
}

export default App