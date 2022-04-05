import React,{ useState,useEffect } from "react";
import  '../Styles/Account.css'
import  '../Styles/Parcels.css'
import ParcelListing from "../ParcelListing";
import { useDispatch } from "react-redux";
import { addProductAction } from '../../redux/actions/productActions'
// import Axios from 'axios'
import Parcelslider from '../Sliders/Parcelslider'
import { addDoc,collection,getDocs } from "firebase/firestore";
import {db} from '../../Firebase'
import Parcelslists from "../../Functions/Parcelslists";




const AddParcel= () => {



    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
     const [type, setType] = useState("");
     const[value,setValue]= useState("");
     const[eta,setEta]= useState("");
      const [weight, setWeight] = useState("");
      const[count,setCount]= useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [show,setShow]=useState(true);
    const parcelsCollectionRef= collection(db, "parcels");
    const [parcels,setParcels] =useState([]);
    

    const [addingParcel, setAddingParcel] = useState(false);

    const dispatch =  useDispatch();

   
    const handleAddParcel = () => {

        dispatch(addProductAction({
            image,
            title,
            description,
            price,
            value,
            eta,
            type,
            weight,
            count,
        }))

        setImage("")
        setTitle("")
        setPrice("")
        setType("")
        setWeight("")
        setValue("")
        setEta("")
        setCount("")
        setDescription("")
        setAddingParcel(false)
    };

    const createparcel = async () =>{
        await addDoc( parcelsCollectionRef,{image: image,Title:title,
            Type:type,description:description,price:price,value:value,weight:weight})
    
    }
    

    return (
        <div>
            <div id="lp">
            <div className="login_check">
                <label htmlFor="">
                    <input
                        value={addingParcel}
                        onChange={(e) => setAddingParcel(e.target.checked)}
                        type="checkbox"
                        name=""
                        id=""
                    />{" "}
                    parcel+
                </label>
            </div>
                <div id="toggle">
                    {
                        show?<div><Parcelslists/></div>:null
                    }
                <button   id="padd" onClick= {()=>setShow(!show)}> parcels Added
                </button>
            </div>


            </div>

            {addingParcel && (
                <div className="row">
                    <h1>Add Parcel</h1>
                    <div
                        style={{ margin: "auto" }}
                        className="lform"
                    >
                        <div className="form">
                            <label htmlFor="">Image</label>
                            <input
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                type="text"
                                className="in"
                            />
                        </div>
                        <div className="form">
                            <label htmlFor="">Title</label>
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                className="in"
                            />
                        </div>
                        <div className="form">
                            <label htmlFor="">Type</label>
                            <input
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                type="text"
                                className="in"
                            />
                        </div>
                        <div className="form">
                            <label htmlFor="">Weight</label>
                            <input
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                type="number"
                                className="in"
                            />
                        </div>
                        <div className="form">
                            <label htmlFor="">Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                type="text"
                                className="in"
                            ></textarea>
                        </div>
                         <div className="form">
                            <label htmlFor="">Value</label>
                            <input
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                type="number"
                                className="in"
                            />
                        </div>
                        <div className="form">
                            <label htmlFor="">Price</label>
                            <input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                type="number"
                                className="in"
                            />
                        </div>
                        <div className="my-4">
                            <button
                                onClick={createparcel}
                               
                            >
                                Add 
                            </button>
                        </div>
                    </div>
        
                </div>
            )}
            <div id='ADS'><Parcelslider/></div>
        </div>
    );
};

export default AddParcel;
