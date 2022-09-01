import {createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        signOut, onAuthStateChanged
        } from 'firebase/auth' 

// initialize create context
const AuthContaxt = createContext()

export function AuthContaxtProvider({children}) {

    const [user, setUser] = useState({})


    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return unsubscribe()
    })


    return (
        <AuthContaxt.Provider value={{signUp, login, logOut , user}}>
            {children}
        </AuthContaxt.Provider>
    )
}


export function UserAuth() {
    return useContext(AuthContaxt)
}