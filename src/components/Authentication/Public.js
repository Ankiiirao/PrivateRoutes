import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {isAuthentcated} from './index'

const Public=({component:Component,...rest})=>{
    return (
        <Route
        {...rest}
         render={(props) =>
          isAuthentcated()?
          <Redirect to={{pathname :'/login',
          state:{from:props.location}
     }}/>:
          (<Component {...props}/>)}
       /> 
    )
}
export default Public;
