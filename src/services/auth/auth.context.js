import {createContext, useEffect, useState} from "react";
import {loginRequest, registerRequest} from "./auth.service";
import {FIREBASE_AUTH} from "../../../firebaseConfig";
import {signOut,onAuthStateChanged} from "firebase/auth";
export const AuthContext = createContext()
export const AuthContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (usr) => {
            if (usr) {
                setUser(usr);
                setIsLoading(false)
            } else {
                setIsLoading(false)
            }
        })
    }, []);

    const onLogin = async (email, password) => {
        setIsLoading(true)
        await loginRequest(FIREBASE_AUTH,email, password).then((u) => {
            setUser(u)
            setIsLoading(false)
        }).catch((error) => {
            setIsLoading(false)
            setError(error.message)
        })
    }

    const onRegister = async (email, password, repeatedPassword) => {
        if(password !== repeatedPassword){
           setError('Password not the same')
            return;
        }
        setIsLoading(true)
        await registerRequest(FIREBASE_AUTH,email, password).then((u) => {
            setUser(u)
            setIsLoading(false)
        }).catch((error) => {
            setIsLoading(false)
            setError(error.message)
        })
    }

    const onLogOut = ()=>{
        setUser(null)
        signOut(FIREBASE_AUTH)
    }

    return (
        <AuthContext.Provider value={{
            isAuth: !!user,
            user,
            isLoading,
            error,
            onLogin,
            onRegister,
            onLogOut
        }}>
            {children}
        </AuthContext.Provider>
    )

}