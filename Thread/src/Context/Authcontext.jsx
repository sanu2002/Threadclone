import { createContext, useEffect, useState } from "react";



const context=createContext()






const Authprovider=({children})=>{

  const [isloading,setloading]=useState(true)

  const userdata={

  }


  useEffect(()=>{
       setloading(false)
  })




   return(
         <context.Provider value={userdata} >
            {isloading ?<h1 style={{'textAlign':'center','margin':'auto 0'}}>Loading.......</h1>:children}
         </context.Provider>
   )
     
}

export default Authprovider
