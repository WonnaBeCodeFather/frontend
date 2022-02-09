import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import {  useState, useEffect } from 'react';
import axios from 'axios'

export const Header = () => {
  const [username, setUsername] = useState('')
  const [login, setLogin] = useState(false)
  const navigate = useNavigate()

  const goLogin = () => {
    navigate('login')
  }
  
  const goLogout = () => {
    setUsername('')
  }

const token = localStorage.getItem('token')



useEffect(() => {
    axios.get('http://127.0.0.1:8000/selfuser/', {
      headers: {
        "Authorization" : `Token ${token}`
      }
    })
    .then ((response) => {setUsername(response.data.username); console.log('запрос')})
    .catch ((e) => console.log(e.response.data))
},[])


console.log('render')



  return <div className='header'>
    <div className='login-block'>
  {!username ? <button onClick={goLogin} className='login'>Login</button> : <button onClick={goLogout} className='login'>Logout</button>}
  <p>{username}</p>
  </div>
  <Link className='dixi_font' to='/'>DIXI</Link>
  
</div>;
};

