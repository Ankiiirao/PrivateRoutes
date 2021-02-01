import React from 'react'
import './style/signIn.css'
export default function SignIn() {
    const setting = () =>{
        localStorage.setItem("token","{name:ankita}")
    }
    return (
        <div className="Sign-In">
            <input className="inpt" type="text" placeholder="Email"></input>
            <input className="inpt" type="password" placeholder="Password"></input>
            <button className="button" onClick={setting}>Sign In</button>
        </div>
    )
}
