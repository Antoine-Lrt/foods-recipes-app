import React, { createContext, useContext, useEffect, useState } from "react";
import { authentication} from "../../utils/firebase-config";
import { createUserWithEmailAndPassword , 
        signInWithEmailAndPassword, 
        onAuthStateChanged, signOut, 
        sendPasswordResetEmail, 
        confirmPasswordReset,
        updateProfile,
        deleteUser,
        reauthenticateWithCredential
} from "firebase/auth";



const AuthContext = createContext({
    currentUser: null,
    isSignUp: () => Promise,
    isSignIn: () => Promise,
    isSignOut: () => Promise,
    // isSignInWithGoogle: () => Promise,
    forgotPassword: () => Promise,
    resetPassword: () => Promise,
    reauthenticateWithCredential: () => Promise,
    deleteUsers: () => Promise,
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({children}) {
    const [currentUser, setCurrentUser] =useState(null)

    

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(authentication, user => {
            setCurrentUser(user)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    // onAuthStateChange //
    
    onAuthStateChanged(authentication, (user) => {
        console.log('user status change :', user);
    } )

    // Sign up //

    const isSignUp = async (email, password, displayName) => {
        const {user} = await createUserWithEmailAndPassword(authentication,email, password)
        updateProfile(user, {
            'displayName': displayName
        })
    }

     // Sign in //
    
    const isSignIn = (email, password) => {
        return signInWithEmailAndPassword(authentication,email, password )
    }

     // Forgot Password //

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(authentication, email, {
            url: 'https://google.fr'
        })
    }

    // Reset Password //

    const resetPassword = (oobCode, newPassword) => {
        return confirmPasswordReset(authentication,oobCode, newPassword)
    }

     // Sign out //

    const isSignOut = () => {
        return signOut(authentication)
    }
    
   // Delete Account //

   const deleteUsers = () => {

    const user = authentication.currentUser

    deleteUser(user)
    .then(() => {
        alert('Votre compte a été suprimé')
    })
    .catch((error) => {
        console.log(error);
    })
   }

   // Reauthenticate With Credential //
   const reauthenticate = () => {
    const user = authentication.currentUser
    const credential = promptForCredentials()

    reauthenticateWithCredential(user, credential)
    .then(() => {
        console.log('user re-autenticated');
    })
    .catch((error) => {
        console.log(error);
    })
   }



    const value = {
        currentUser,
        isSignUp,
        isSignIn,
        isSignOut,
        // isSignInWithGoogle,
        forgotPassword,
        resetPassword,
        reauthenticateWithCredential,
        deleteUsers
    }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}