import React,{ useState,useEffect } from 'react'
import { addDoc,collection,getDocs } from "firebase/firestore";
import {db,app} from '../Firebase'






function Userslisting() {
const [users, setUsers]=useState([])
const usersCollectionRef= collection(db, "users");

    useEffect(() => {
        const getusers= async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
            console.log(data)
        };
       getusers(); 
    
    }, []);

  return (
    <div> i am great
        <div>
        {/* 
            
            
            
            
             */}
           
    {users.map((user) => {
        return <div> 
             {""}
             <img src= {user.image} width="90px"/>
             <p>Username: {user.username}</p>
             <p>Name: {user.fullname}</p>
             <p>Id: {user.Userid}</p>
             <p>Email: {user.email}</p>
            <p>Telephone: {user.Tel}</p>
            {/* <p>Location: {user.location}</p> */}
            
        </div>
    })}
</div>
</div>
  );
}

export default Userslisting