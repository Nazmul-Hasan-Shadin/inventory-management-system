import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { Children, createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext= createContext();

const provider = new GoogleAuthProvider();



const AuthProvider=({children}) => {

  const [user,setUser]=useState()
  const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
      setLoading(true)
        return  createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
      setLoading(true)
        return signOut(auth)
    }

    const updateUser= (name,photo)=>{
      setLoading(true)
     return updateProfile(auth.currentUser,{
         displayName: name,
         photoURL:photo
    })
    } 

  const googleSignIn=()=>{
    setLoading(true)
     return signInWithPopup(auth,provider)
  }
  const handleSignedIn=(email,password)=>{
    setLoading(true)
   return signInWithEmailAndPassword(auth,email,password)


  } 
    // observer

  useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth,user=>{
     if (user) {
        console.log(user);
        setUser(user)
          setLoading(false)

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