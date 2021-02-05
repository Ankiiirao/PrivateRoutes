import React,{useState,useEffect,} from 'react'
import {Link,useHistory} from 'react-router-dom'
import './style/signIn.css'
export default function SignIn() {
    const [place,setPlace]=useState(false)
    const history = useHistory()
    const setting = () =>{
        localStorage.setItem("token","{name:ankita}")
        setPlace(true)
        // history.push('/')
    }
    useEffect(() => {
        console.log("22222222222222222222")
            place?history.push('/'):console.log("________________________________")
    }, [place])
  
    return (
        <div className="Sign-In">
            <input className="inpt" type="text" placeholder="Email"></input>
            <input className="inpt" type="password" placeholder="Password"></input>
            <button className="button" onClick={setting}>Sign In</button>
        </div>
    )
}
