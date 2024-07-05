import React, {useEffect, useState} from 'react'

const Form = ({fetchData}) => {

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  })

  const onChangeHandler = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value
    })
  }

    const handleSubmit = () => {
        fetchData(userCredentials)
    }

  

  return (
    <div>
      <input type="text" value={userCredentials.email} name='email' onChange={onChangeHandler}/>
      <input type="password" value={userCredentials.password} name='password' onChange={onChangeHandler}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Form
