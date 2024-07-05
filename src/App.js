import React, {useState} from 'react'
import Register from './Register'
import Login from './Login'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
 
  return (
    <div>
      {!isLoggedIn ? <Register setIsLoggedIn={setIsLoggedIn}/>: <Login/>}
      <h1>Just for testing</h1>
      <h1>For testing branch</h1>
    </div>
  )
}

export default App
