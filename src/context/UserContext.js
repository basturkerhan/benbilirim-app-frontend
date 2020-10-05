import React, { useState, createContext, useEffect } from "react"
import { client } from "../helpers/httpHelpers"
export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    const storageUser = localStorage.getItem("access_token")
    const [isLoad, setIsLoad] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const getUser = () => {
            if (!storageUser) {
                setIsLoad(true)
                setUser(null)
                return
            }
            client("users/me")
                .then(data => {
                    setIsLoad(true)
                    setUser(data)
                    return
                })

        }
        getUser()
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser, isLoad }}>
            {children}
        </UserContext.Provider>
    )
}