import React from 'react'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Route,Routes} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Profile from './Pages/Profile'
const App = () => {
  return (<>
  <Routes>
        <Route path="/" element={ <Landing/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="signup" element={ <Signup/> } />
        <Route path="profile" element={ <Profile/> } />
      </Routes>
    </>
  )
}

export default App