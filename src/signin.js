import React from 'react'
import './style/signIn.css'
export default function SignIn() {
    return (
        <div className="Sign-In">
            <input className="inpt" type="text" placeholder="Email"></input>
            <input className="inpt" type="password" placeholder="Password"></input>
            <button className="button">Sign In</button>
        </div>
    )
}
