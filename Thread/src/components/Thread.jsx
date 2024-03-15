import React, { useEffect, useState } from 'react'
import { Trash2 ,Heart,Repeat,Send,Share,MessageCircle} from 'react-feather'
import { database, functions } from '../Appwriteconfig'
import TimeAgo from 'react-timeago'
import en from 'javascript-time-ago'
import { VITE_COLLECTIONID,VITE_DBID,storage,VITE_BUCKETID } from '../Appwriteconfig';



const Thread = ({thread,setthraeds}) => {
//   console.log(value,'suucessyl i am getting the value')
const [username,setUsername]=useState(null)
const [loading,setloading]=useState(true)
const [owner,setowner]=useState(true)


const [threadinstances,setthreadinstace]=useState(thread)
// console.log(threadinstances,'previously ')




const handledelete=async(e)=>{
    e.preventDefault()

    let response=await database.deleteDocument(VITE_DBID,VITE_COLLECTIONID,thread.$id)
    setthraeds(prevstate=>prevstate.filter((item)=>item.$id!=thread.$id))



    



   






}




const createdate=thread.$createdAt


// console.log(thread)

const user=async()=>{

     const payload={
           'owner_id':thread.owner_id
     }



    try {
        const response=await  functions.createExecution('65e6b4bd0baa96e174fc',JSON.stringify(payload))
        const userdata=JSON.parse(response.responseBody)
        // console.log(response)
        setUsername(userdata.name)
        setowner(userdata.userprofile)
        setloading(false)

       
    
    
        
    } catch (error) {
           console.log(error)
        
    }
   

}

useEffect(()=>{

    user()
})


 const tooglelike=async()=>{
    console.log('you got a like man ')
    const user_who_like=thread.user_who_like
    const currentuserid=thread.owner_id

    if (user_who_like.includes(currentuserid)){
           const index=user_who_like.indexOf(currentuserid)
           user_who_like.splice(index,1)
    }
    else{
        user_who_like.push(currentuserid)
    }

    const payload={
        'user_who_like':user_who_like,
        'likes':user_who_like.length

    }

    let response=await  database.updateDocument(VITE_DBID,VITE_COLLECTIONID,thread.$id,payload);
    
    setthreadinstace(response);
         
    
    

    



 }



    


  
  useEffect(()=>{
  },[])

  if(loading)  return




  return (
    <>
    
     

        <div className='flex p-4 border-b border-[rgba(49,49,50)]' >
            
            <img  className='w-14  h-12 rounded-full object-cover'
            src={owner} />
        
            <div className='w-full px-2'>




                        {/* thread header  */}
                        <div className='flex justify-between gap-2'>
                            <div>
                                <strong>{username}</strong>
                            </div>
                            {/* <a href={thread.slug}>click-me</a> */}
                        


                            <div className='flex justify-between gap-2'>
                                <p style={{ color: 'rgb(119, 119, 119)' }}><TimeAgo date={createdate}/></p>
                                {/* new Date(createdate).getTime() */}
                                <Trash2 onClick={handledelete} size={20} className='cursor-pointer '/>

                            </div>


                        </div>


                        {/* thraed body start here  */}

                        <div className='py-4' style={{whiteSpace:"pre-wrap"}}>
                                {thread.body}
                          
                           
                        </div>
                        {thread.images &&(
                            <img className='object-cover min-h-90 min-w-90 border rounded-2xl'  src={thread.images}></img>
                        )
                           
                        }


                        {/* thraed commenst and like and retwwets start here  */}


                        <div className='flex gap-4 py-4'>

                              <Heart  className='cursor-pointer ' style={{fill:threadinstances.likes?'red':'black'}}   onClick={tooglelike} size={22}/>
                              <MessageCircle size={22} />

                              <Repeat size={22} />
                              <Send  size={22}/>
                              <Share size={22} />
                              


                        </div>

                        <div className='flex gap-2 py-4'>
                        <p style={{ color: 'rgb(119, 119, 119)' }}>{threadinstances.likes}likes</p>
                        <p style={{ color: 'rgb(119, 119, 119)' }}>comments 0</p>



                        </div>


            </div>





        </div>
       
        
    
    
    
    
    
    
    
    </>


    
    
  )
}

export default Thread