import React, { useEffect, useRef, useState } from 'react'
import Thread from '../components/Thread'
import { Image ,Edit3} from 'react-feather';
import { VITE_COLLECTIONID,VITE_DBID,database,storage,VITE_BUCKETID } from '../Appwriteconfig';
import { ID, Query } from 'appwrite';



import { Key } from 'react-feather';
// import generateslug from '../slug'; we will see it later

const query = new Query();




export const Feed = () => {

    const [threads,setthraeds]=useState([]);
    const [threadbody,setthreadbody]=useState('')
    const [image,setimage]=useState('')
    const fileref=useRef(null)


    const feed=async ()=>{

            try {

                  let thraed=await database.listDocuments(VITE_DBID,VITE_COLLECTIONID,[
                        Query.orderDesc('$createdAt')//THIS FOR DESENDING THE POST 
                  ])
                  setthraeds(thraed.documents)

            

                   
                
            } catch (error) {
                  console.log(error)
                
            }
               
    }


    const bucketupdate= async (e)=>{
      // e.preventDefault()
      fileref.current.click();

    }

    const handlefilechnage=async (e)=>{
      // console.log(e.target.files[0])
                    
      const images=await storage.createFile(VITE_BUCKETID,ID.unique(),document.getElementById('uploader').files[0])
      const buck= storage.getFilePreview(images.bucketId,images.$id)
      console.log(buck.href)
      setimage(buck.href)

      



    }

   
    

    const handlesubmit=async(e)=>{
            e.preventDefault()
            console.log(e.target.value,'heree is the e tht i am getting ')

            const paylaod={
                  "owner_id":"65e09869a417a140a7da",
                  "body":threadbody,
                  "images":image,
                  // "slug":generateslug('here iam a member'),
            }
            
                        
            let response=await database.createDocument(VITE_DBID,VITE_COLLECTIONID,ID.unique(),paylaod);
            setthraeds(prevState=>[response,...prevState])
            // console.log(response,'here i am getting the response after craetaion in backend')
            setthreadbody('')
            setimage(null)
            

                  
}


 


              
  useEffect(()=>{
      feed()

  },[])

 

  return (
      <>

    <div  className='container mx-auto max-w-[600px] sm:max-w-[800px] lg:max-w-[1000px]; h-7 py-4'>
         
           {/* this section is for creating post  */}
           <div className='py-4 container mx-auto  sm:max-wlg:max-w-[400px]'>
               <form onSubmit={handlesubmit}>
                  <textarea name={threadbody} value={threadbody} onChange={(e)=>setthreadbody(e.target.value)}   style={{'height':'100px','color':'white','padding':'20px'}} className='w-full bg-[#8888] my-4 rounded-2xl color-[rgba(#151212)]'
                   placeholder='whats happenig here......'  ></textarea>

                  <input onChange={handlefilechnage}  style={{display:'none'}}  id='uploader'  ref={fileref}   type='file' />
                  <div className='flex px-4 justify-between border-y py-7 border-[rgba(49,49,49,1)] '>
                        <Image onClick={bucketupdate} className='cursor-pointer' size={24} />
                        <button className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-1 px-3 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                              Submit
                              </button>



                  </div>
                      


               </form>
           </div>
          






  
          {/* <Thread/> */}

          {threads.map((thread)=>(
                //  console.log(thread)
                
                 <Thread key={thread.$id}  thread={thread} setthraeds={setthraeds} ></Thread>
          ))}

          

         
      
        
    </div>
  </>

  )
}
