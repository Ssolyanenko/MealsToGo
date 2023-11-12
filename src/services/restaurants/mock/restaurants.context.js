import {createContext, useEffect, useState} from "react";
import {restaurantsRequest, restaurantsTransform} from "./restaurants.service";

export const RestaurantsContext = createContext()
export const RestaurantsContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setisError] = useState(null)

    async function retrieveRestaurants() {
        setIsLoading(true)
        setTimeout(() => {
            restaurantsRequest().then(restaurantsTransform).then(res => setRestaurants(res)).catch(error => setisError(error))
        }, 2000)
        setIsLoading(false)
    }

    useEffect(() => {
        retrieveRestaurants()
    }, []);

    return (
        <RestaurantsContext.Provider value={{
            restaurants,
            isLoading,
            isError
        }}>
            {children}
        </RestaurantsContext.Provider>
    )
}