import {createContext, useState} from "react";
import {loginRequest} from "./auth.service";

export const AuthContext = createContext()
export const AuthContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const onLogin = async (email, password) => {
        console.log(email,password)
        setIsLoading(true)
        await loginRequest(email, password).then((u) => {
            setUser(u)
            setIsLoading(false)
            console.log(u)
        }).catch((error) => {
            setIsLoading(false)
            console.log(error)
            setError(error)
        })
    }
    return (
        <AuthContext.Provider value={{
            isAuth: !!user,
            user,
            isLoading,
            error,
            onLogin,
        }}>
            {children}
        </AuthContext.Provider>
    )

}