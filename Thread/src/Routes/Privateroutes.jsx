import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const Privateroutes = ({component:Component,...rest}) => {

   const [isauthenticated,setauthenticated]=useState(false)
   useEffect(() => {

 }, []);



  return isauthenticated ?<Component {...rest} />:<Navigate to='/login' replace />
    
  
}



export default Privateroutes;