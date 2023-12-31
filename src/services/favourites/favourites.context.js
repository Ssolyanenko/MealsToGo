import {createContext, useState} from "react";

export const FavouritesContext = createContext()

export const FavouritesContextProvider = ({children}) =>{
    const [favourites, setFavourites] = useState([])
    const add = (restaurant)=>{
        setFavourites([...favourites,restaurant])
    }

    const remove = (restaurants) => {
        const updatedFavourites = favourites.filter((unfavourite)=> unfavourite.placeId !== restaurants.placeId)
        setFavourites(updatedFavourites)
    }

    return (
        <FavouritesContext.Provider value={{
            favourites,
            addToFavourites: add,
            removeFromFavourites:remove
        }}>
            {children}
        </FavouritesContext.Provider>
        )
}