import React from 'react'
import Form from './Form'

const Login = () => {

  const loginHandler = async(userData) => {
    try{
        const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      })
      if(response.ok){
        console.log('User Logged In Successfully')
      }
      else{
        console.log('User Login Failed')
      }
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
        <h1>Login</h1>
      <Form fetchData={loginHandler}/>
    </div>
  )
}

export default Login
