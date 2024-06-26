



import React,{useContext,createContext,useEffect,useState} from "react";

import { auth,db } from "../firebase";

import{ createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged
      }from 'firebase/auth'

import { setDoc,doc } from "firebase/firestore";

const AuthContext = createContext()

export function AuthContextProvider({children}){

    const [user,setUser]=useState({})

    function signUp(email,password){
        
       
       setDoc(doc(db,'users',email),{
         saveProduct:[]
        })
        createUserWithEmailAndPassword(auth,email,password)
    }

    function logIn(email,password){
       
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut(){
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            return ()=>{
                unsubscribe();
            }
        })
    })

    return (
        <AuthContext.Provider value={{signUp,logIn,logOut,user}}>
          {children}
        </AuthContext.Provider>
    )

}

export function UserAuth(){
    return useContext(AuthContext) 
}