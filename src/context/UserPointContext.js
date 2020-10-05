import React, { useState, createContext, useContext } from "react"
import { UserContext } from "./UserContext"

export const UserPointContext = createContext(null)

export const UserPointProvider = ({ children }) =>{

    const {user} = useContext(UserContext)
    const [userPoint, setUserPoint] = useState(user.point)
    
    return (
        <UserPointContext.Provider value={{userPoint, setUserPoint}}>
            {children}
        </UserPointContext.Provider>
    )
}