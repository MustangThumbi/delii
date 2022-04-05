import React,{useEffect,useState} from "react";
import { collection, getDocs } from "firebase/firestore";
import {db} from '../Firebase'



const ParcelListing= () => {
    const [parcels,setParcels] =useState([]);
    const parcelsCollectionRef= collection(db, "parcels");
    useEffect (()=>{
        const getparcels= async ()=>{
            const data = await getDocs(parcelsCollectionRef);
           setParcels(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
            console.log(data.docs);
        };
        getparcels();
    }, []);

    return <div>
        {parcels.map((parcels) =>{
            return(
                <div>
                    {" "}
                    <h1>image: {parcels.image}</h1>
                    <h1>title: {parcels.Title}</h1>
                    <h1>type: {parcels.Type}</h1>
                    <h1>weight: {parcels.weight}</h1>
                    <h1>description: {parcels.description}</h1>
                    <h1>price: {parcels.price}</h1>
                  

                </div>
            )
        })}
    </div>
};

export default ParcelListing;
