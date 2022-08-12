import React, { createContext, useContext, useEffect, useState } from "react";
import { authentication } from "../../utils/firebase-config";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithRedirect, setPersistence, sendPasswordResetEmail, confirmPasswordReset} from "firebase/auth";



const AuthContext = createContext({
    currentUser: null,
    isSignUp: () => Promise,
    isSignIn: () => Promise,
    isSignOut: () => Promise,
    // isSignInWithGoogle: () => Promise,
    forgotPassword: () => Promise,
    resetPassword: () => Promise,
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({children}) {
    const[currentUser, setCurrentUser] =useState(null)

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(authentication, user => {
            setCurrentUser(user)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const isSignUp = (email, password) => {
        return createUserWithEmailAndPassword(authentication,email, password )
    }

    const isSignIn = (email, password) => {
        return signInWithEmailAndPassword(authentication,email, password )
    }

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(authentication, email, {
            url: 'https://google.fr'
        })
    }

    const resetPassword = (oobCode, newPassword) => {
        return confirmPasswordReset(authentication,oobCode, newPassword)
    }

    // const authPersistence = () => {
    //     return setPersistence(authentication)
    // }

    // const isSignInWithGoogle = () => {
    //     const provider = new GoogleAuthProvider()
    //     return signInWithRedirect(authentication, provider)
    // }



    const isSignOut = () => {
        return signOut(authentication)
    }

    const value = {
        currentUser,
        isSignUp,
        isSignIn,
        isSignOut,
        // isSignInWithGoogle,
        forgotPassword,
        resetPassword
    }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}