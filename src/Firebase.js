import {GoogleAuthProvider,
    sendPasswordResetEmail,
    getAuth,signOut,signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
 } from "firebase/auth";
 import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
    import {getFirestore,query,getDocs,
        collection, where, 
        addDoc,
     } from "firebase/firestore";

     const firebaseConfig = {
        apiKey: "AIzaSyAd6W4D0MIJkUtAoFzSiVk6xtdLPsa617c",
        authDomain: "send-it-7fed7.firebaseapp.com",
        projectId: "send-it-7fed7",
        storageBucket: "send-it-7fed7.appspot.com",
        messagingSenderId: "631109309887",
        appId: "1:631109309887:web:096026c3d36b213df67d0a",
        measurementId: "G-BXPXT6CGE6"
      };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


  const logout = () => {
    signOut(auth);
  };

  export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };