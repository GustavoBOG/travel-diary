import { Route, Routes } from 'react-router-dom'
import Header from './Routes/Header/Header'
import Register from './Routes/Register/Register'
import NewEntrie from './Routes/NewEntrie/NewEntrie'
import Home from './Routes/Home/Home'
import Login from './Routes/Login/Login'
import './App.css'
import Profile from './Routes/Profile/Profile'

function App() {


  return (
    <>
    <Header/>
      <Routes>
        
        <Route path="/" element={<Home />}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="entries/new" element={<NewEntrie />}/>
        <Route path="/users" element={<Profile />}/>

      </Routes>
    </>
  )
}

export default App