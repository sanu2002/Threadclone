import { Account, Client,Databases,ID ,Functions, Storage } from 'appwrite'



const VITE_ENDPOINT = import.meta.env.VITE_ENDPOINT;
const VITE_PROJECTID = import.meta.env.VITE_PROJECTID;
const VITE_DBID = import.meta.env.VITE_DBID;
const VITE_COLLECTIONID = import.meta.env.VITE_COLLECTIONID;
const VITE_BUCKETID = import.meta.env.VITE_BUCKETID;


export { VITE_ENDPOINT, VITE_PROJECTID, VITE_DBID, VITE_COLLECTIONID,VITE_BUCKETID };





const client = new Client()





client
    .setEndpoint(VITE_ENDPOINT)
    .setProject(VITE_PROJECTID); 


export const database=new Databases(client);

export const functions=new Functions(client);

export const storage=new Storage(client);









export default client


