import React,{useState,useEffect,} from 'react'
import {useHistory} from 'react-router-dom'
import './style/signIn.css'
export default function SignIn(props) {
    const [place,setPlace]=useState(false)
    console.log(props)
    const history = useHistory()
    const setting = () =>{
        localStorage.setItem("token","{name:ankita}")
        setPlace(true)
    }
    useEffect(() => {
        document.title="Sign In"
       
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
