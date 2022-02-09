import React from 'react';
import './login.css'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }


    const senddata = (e) => {
        e.preventDefault()
        getToken()
 
    }

    const getToken = () => {
        axios.post('http://127.0.0.1:8000/dj-rest-auth/login/', {
            "username" : login,
            "password": pass
        })
        .then((response) => 
        {localStorage.setItem('token', response.data.key); goHome()})
        .catch(e => console.log(e.response.data))  
        .catch((error) => console.log(error))
    }

  return <div className='loginer'>
      <div className='formloginer'>
      <form className='form' action="">
          <input onChange={e => setLogin(e.target.value) } className='log' type="text" placeholder='Введите Логин' value={login} />
          <input onChange={e => setPass(e.target.value)} className='pas' type="text" value={pass} placeholder='Введите пароль' />
          <button to='/' className='but' onClick={senddata}>Авторизоваться</button>
      </form>
      </div>
  </div>
  
};
