import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dog = () => {
    let navigate = useNavigate(); // useNavigate package ek method provide krega and hum uss method ka use krenge, page pr naviagte hone ke liye
    let redirectPageHandler = ()=>{
        // uss page pr (means main page pr) navigate hone ke liye (means redirect krne ke liye ) useNavigate package ka use krenge and it is a package of react router dom so ise import krenge
        navigate('/');
        // / is a root route
    }
    // navigate means page pr redirect krne ke liye
  return (
    <div>
        <h1>Woof Woof</h1>
        <button onClick={redirectPageHandler}>Main Page</button>
    </div>
  )
}

export default Dog


// documentation for reactjs => react.dev