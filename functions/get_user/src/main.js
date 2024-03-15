import { Client } from 'node-appwrite';
import sdk from 'node-appwrite'


// function add(a,b){
//   return a + b;
// }
// const context={req, res, log, error}

export default async ({ req, res, log, error }) => {
      //  log(add(1,2))sn

    const client=new sdk.Client()

    const user=new sdk.Users(client)



      
    client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID) 
    .setKey(process.env.APPWRITE_API_KEY) 
   

    let payload=JSON.parse(req.body)
    const userId = payload.owner_id;

    if (!userId) {
      throw new Error('User ID is missing');
    }

    
    // log(payload)
    let response=await user.get(userId)
    log(response)


    const userdata={
        '$id':response.$id,
        'name':response.name,
        'userprofile':response['prefs']['userprofile']

    }

    log(userdata)





    return res.json(userdata)




    





    // return res.send(add(1,2))
  
};
