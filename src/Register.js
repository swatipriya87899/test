import React, {useState} from 'react'
import Form from './Form'

const Register = ({setIsLoggedIn}) => {

  const loginHandler = async(userData) => {
    try{
        const response = await fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      })
      if(response.ok){
        console.log('User Registered Successfully')
        setIsLoggedIn(true)
      }
      else{
        console.log('User Registration Failed')
      }
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
        <h1>Register</h1>
      <Form fetchData={loginHandler}/>
    </div>
  )
}

export default Register
