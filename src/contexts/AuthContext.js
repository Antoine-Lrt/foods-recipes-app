import React, { createContext, useContext, useEffect, useState } from "react";
import { authentication } from "../../utils/firebase-config";


const AuthContext = createContext({
    currentUser: null
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({children}) {
    const[currentUser, setCurrentUser] =useState(null)

    const value = {
        currentUser,
    }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}