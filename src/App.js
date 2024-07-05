import React, {useState} from 'react'
import Register from './Register'
import Login from './Login'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      {!isLoggedIn ? <Register setIsLoggedIn={setIsLoggedIn}/>: <Login/>}
    </div>
  )
}

export default App
