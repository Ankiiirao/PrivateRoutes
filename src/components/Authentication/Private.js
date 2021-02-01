import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {isAuthentcated} from './index'
const Private = ({component:Component,...rest})=>{
    return (
       <Route
          {...rest}
           render={(props) =>
            isAuthentcated()?
            (<Component {...props}/>):
            <Redirect to={{pathname :'/login',
             state:{from:props.location}
        }}/>
        }
       />
    )
}

export default Private;
