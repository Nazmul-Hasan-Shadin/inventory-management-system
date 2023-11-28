import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { Children, createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";
import useAxiosPublic from "../hooks/useaxiosPublic";


export const AuthContext= createContext()

const provider = new GoogleAuthProvider();



const AuthProvider=({children}) => {
 const axiosPublic= useAxiosPublic()
  const [user,setUser]=useState()
  const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
      setLoading(true)
        return  createUserWithEmailAndPassword(auth,email,password)
    }

    const handleLogOut=()=>{
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
        console.log(user)
        setUser(user)
        setLoading(false)

      if (user) {

        const email= {email:user.email}
        axiosPublic.post('/jwt',{email})
        .then(res=>{
        console.log(res);
        localStorage.setItem('access-token',res.data.token)

        })
      }
      else{
        localStorage.removeItem('access-token')
      }

       
     }

     else{
      setUser(null)
     }
  })
  return ()=>unsubscribe()

  },[]) 


  const authInfo= {

    handleLogOut,
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