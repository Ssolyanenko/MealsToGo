import {createContext, useState} from "react";
import {loginRequest} from "./auth.service";

export const AuthContext = createContext()
export const AuthContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const onLogin = async (email, password) => {
        setIsLoading(true)
        await loginRequest(email, password).then((u) => {
            setUser(u)
            setIsLoading(false)
        }).catch((error) => {
            setIsLoading(false)
            setError(error)
        })
    }
    return (
        <AuthContext.Provider value={{
            user,
            isLoading,
            error,
            onLogin,
        }}>
            {children}
        </AuthContext.Provider>
    )

}