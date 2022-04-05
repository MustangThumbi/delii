import React,{ useState,useEffect } from 'react'
import { addDoc,collection,getDocs } from "firebase/firestore";
import {db,app} from '../Firebase'


function Parcelslists() {
    const [parcels, setParcels]=useState([])
const parcelsCollectionRef= collection(db, "parcels");

    useEffect(() => {
        const getparcels= async () => {
            const data = await getDocs(parcelsCollectionRef);
            setParcels(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
            console.log(data)
        };
       getparcels(); 
    
    }, []);

  return (
    <div>
        <div>
           
           {parcels.map((parcel) => {
               return <div> 
                    {""}
                    <img src= {parcel.image} width="200px"/>
                    <p>title: {parcel.Title}</p>
                    <p>type: {parcel.Type}</p>
                    <p>weight: {parcel.weight}</p>
                    <p>description: {parcel.description}</p>
                    <p>price: {parcel.price}</p>
                  
               </div>
           })}
       </div>
    </div>
  )
}

export default Parcelslists