import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { Children, createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext= createContext();

const provider = new GoogleAuthProvider();



const AuthProvider=({children}) => {

  const [user,setUser]=useState()
  const [loading,setLoading]=useState(null)
    const createUser=(email,password)=>{
        return  createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    const updateUser= (name,photo)=>{
     return updateProfile(auth.currentUser,{
         displayName: name,
         photoURL:photo
    })
    } 

  const googleSignIn=()=>{
     return signInWithPopup(auth,provider)
  }
  const handleSignedIn=(email,password)=>{
   return signInWithEmailAndPassword(auth,email,password)


  } 
    // observer

  useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth,user=>{
     if (user) {
        console.log(user);
        setUser(user)

     }
  })
  return ()=>unsubscribe()

  },[]) 


  const authInfo= {

     logOut,
     googleSignIn,
    updateUser,
    createUser,
    user,
    loading,
    handleSignedIn
    

  }

    return (


     <AuthContext.Provider value={authInfo}>
        {children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;