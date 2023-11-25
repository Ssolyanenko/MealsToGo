import {createContext, useContext, useEffect, useState} from "react";
import {restaurantsRequest, restaurantsTransform} from "./restaurants.service";
import {LocationContext} from "../../location/location.context";

export const RestaurantsContext = createContext()
export const RestaurantsContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(null)
    const {location} = useContext(LocationContext)
    console.log(location)
    const retrieveRestaurants = (loc) => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest(loc)
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
        console.log(location)
        if(location){
             const formatedLocation = `${location.lat},${location.lng}`
            retrieveRestaurants(formatedLocation)
        }


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