import React from "react";
import { useState,useEffect,useCallback, 
    useContext,  } from "react";
import {useNavigate } from "react-router-dom";
import  '../Styles/Account.css'
import { useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { addProductAction } from '../../redux/actions/productActions'
import Axios from 'axios'
import Login from "./Authentication/Login";
import { auth, logInWithEmailAndPassword, registerWithEmailAndPassword, signInWithGoogle } from "../../Firebase";
// import firebase from 'firebase/app';
import 'firebase/auth';
import { addDoc,collection,getDocs } from "firebase/firestore";
import {db,app} from '../../Firebase'
import { applyActionCode } from "firebase/auth";
import { setCurrentScreen } from "firebase/analytics";
import { FirebaseError } from "firebase/app";
import Userslisting from "../../Functions/Userslisting";
import Parcelslider from "../Sliders/Parcelslider";
// import { firebase } from "firebase";




const AddUser= ({onClick,error}) => {
    const [userid, setUserid] = useState("");
    const[image,setImage]= useState("");
    const [username, setUsername] = useState("");
     const [fullname, setFullname] = useState("");
     const[tel,setTel]= useState("");
     const[email,setEmail]= useState("");
     const[location, setLocation] = useState("")
     const usersCollectionRef= collection(db, "users");

    
    
     
      const[password,setPassword]= useState("");
      
     
   
    const [login, setLogin] = useState(true);
    const [signup, setSignup]= useState(false);
    const [profile, setProfile]= useState(false);

    const dispatch =  useDispatch();

    const handleAddUser = () => {
      Axios.post("http://localhost:3001/create",{
        userid:userid,
        username:username,
        fullname:fullname,
        tel:tel,
        email:email,
        password:password,
      }
      ).then((response)=>{
        console.log("Boooyaah!");
      });

        dispatch(addProductAction({
            userid,
            location,
            username,
            fullname,
            tel,
            email,
            password,
            
          
        }))

        setUserid("")
        setLocation("")
        setUsername("")
        setFullname("")
        setTel("")
        setEmail("")
        setPassword("")
        
        setSignup(false)

        setLogin(true)
        setProfile(false)
    };


    const createuser = async () =>{
        await addDoc( usersCollectionRef,{Tel: tel,Userid:userid,
         email:email,fullname:fullname,location:location,username:username})
    
    }
  

       
    return (
        <div id="main">
          <div id="acbtn">
            <div className="login_check">
                <label htmlFor="">
                    <input
                        value={login}
                        onChange={(e) => setLogin(e.target.checked)}
                        type="checkbox"
                        name=""
                        id=""
                    />{" "}
                    Login
                </label>
            </div>

            <div className="login_check">
                <label htmlFor="">
                    <input
                        value={signup}
                        onChange={(e) => setSignup(e.target.checked)}
                        type="checkbox"
                        name=""
                        id=""
                    />{" "}
                   Signup
                </label>
            </div>


            <div className="login_check">
                <label htmlFor="">
                    <input
                        value={profile}
                        onChange={(e) => setProfile(e.target.checked)}
                        type="checkbox"
                        name=""
                        id=""
                    />{" "}
                  Profile
                </label>
            </div>

            </div>
           

            {login && (
                <div className="row">
                <h1>Login</h1>
                  <div
                      style={{ margin: "auto" }}
                      className="lform"
                  >
                    
                      
                      
                      
                      <div className="form">
                          <label htmlFor="">Email</label>
                          <input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              type="text"
                              className="in"
                          />
                      </div>
                      <div className="form">
                          <label htmlFor="">Password</label>
                          <input
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              type="password"
                              className="in"
                          />
                      </div>

                      <div id="rbuttons">
                         <button
                             onClick={logInWithEmailAndPassword}
                             className="btnlg"
                         >
                           Login
                         </button>
                         <span>{error}</span>
                         <button
                         onClick={signInWithGoogle}>Google</button>
                         </div>
                   </div>
               
              </div>
          )}
                
            
              {profile && (
                <div className="row">
                  <h1>My profile</h1>
                    <div
                        style={{ margin: "auto" }}
                        className="lform"
                    >
                      
                        <div className="form">

                            <label htmlFor="">UserId</label>
                            <input
                                value={userid}
                                onChange={(e) => setUserid(e.target.value)}
                                type="text"
                                className="in"
                            />
                        </div>

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
                            <label htmlFor="">Username</label>
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                className="in"
                            />
                        </div>
                        <div className="form">
                            <label htmlFor="">Fullname</label>
                            <input
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                type="text"
                                className="in"
                            />
                        </div>
                        <div className="form">
                            <label htmlFor="">Tel</label>
                            <input
                                value={tel}
                                onChange={(e) => setTel(e.target.value)}
                                type="number"
                                className="in"
                            />
                        </div>
                        <div className="form">
                            <label htmlFor="">Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                className="in"
                            />
                        </div>

                        <div className="form">
                            <label htmlFor="">location</label>
                            <input
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                type="text"
                                className="in"
                            />
                        </div>
                        
                        <div className="my">
                            <button
                                onClick={createuser}
                                className="btnlg"
                            >
                                Save
                            </button>
                        </div>
                     </div>
                 
                </div>
            )}


{signup && (
               <div className="row">
               <h1>Signup</h1>
                 <div
                     style={{ margin: "auto" }}
                     className="lform"
                 >
                   
                    
                     <div className="form">
                         <label htmlFor="">Username</label>
                         <input
                             value={username}
                             onChange={(e) => setUsername(e.target.value)}
                             type="text"
                             className="in"
                         />
                     </div>
                     
                    
                     <div className="form">
                         <label htmlFor="">Email</label>
                         <input
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                             type="text"
                             className="in"
                         />
                     </div>
                     <div className="form">
                         <label htmlFor="">Password</label>
                         <input
                             value={password}
                             onChange={(e) => setPassword(e.target.value)}
                             type="password"
                             className="in"
                         />
                     </div>
                     <div className="my">
                         <div id="rbuttons">
                         <button
                             onClick={registerWithEmailAndPassword}
                             className="btnlg"
                         >
                           Signup
                         </button>
                         <button
                         onClick={signInWithGoogle}>Google</button>
                         </div>
                     </div>
                  </div>
              
             </div>
         )}
            
            <div id="acmain"> 
        <div className="alistings">
            <div className="accave">
                <label htmlFor="">
                    {" "}
                    My Account
                </label>
            </div>

            <div className="accave">
                <label htmlFor="">
                    {" "}
                    parcels sent
                </label>
            </div>

            <div className="accave">
                <label htmlFor="">
                    {" "}
                    Saved parcels
                </label>
            </div>

            <div className="accave">
                <label htmlFor="">
                    {" "}
                    Delivered
                </label>
            </div>

            <div className="accave">
                <label htmlFor="">
                    {" "}
                  Enroute
                </label>
            </div>

        </div>
            <div className="listing-det">
                <div id="acdet">
                    <div id="hdb">
                    <h1 >Account details</h1>
                    
                    <label id="cpwd">Change password</label>
                    </div>
                </div>
                
                <div id="profile">
                    <div id="hdb">
                        <h1>Profile details</h1>

                    </div>

                    <div><Userslisting/></div>

            </div>
        </div>
            </div>
            <div id='ADS'><Parcelslider/></div>
        </div>




    );
};

export default AddUser;
