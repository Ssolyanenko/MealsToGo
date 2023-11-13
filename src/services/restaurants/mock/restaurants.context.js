import {createContext, useEffect, useState} from "react";
import {restaurantsRequest, restaurantsTransform} from "./restaurants.service";

export const RestaurantsContext = createContext()
export const RestaurantsContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(null)

    const retrieveRestaurants = () => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest()
                .then(restaurantsTransform)
                .then((results) => {
                    setIsLoading(false);
                    setRestaurants(results);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setIsError(err);
                });
        }, 2000);
    };
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