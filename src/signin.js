import React,{useState,useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import './style/signIn.css'
export default function SignIn() {
    const [place,setPlace]=useState(false)
    const setting = () =>{
        localStorage.setItem("token","{name:ankita}")
        setPlace(true)
    }
    useEffect(() => {
        console.log("22222222222222222222")
            place?<Redirect to='/Dashboard'/>:console.log("________________________________")
    }, [place])
  
    return (
        <div className="Sign-In">
            <input className="inpt" type="text" placeholder="Email"></input>
            <input className="inpt" type="password" placeholder="Password"></input>
            <button className="button" onClick={setting}>Sign In</button>
        </div>
    )
}
