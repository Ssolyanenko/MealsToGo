import React, {useContext} from "react";
import {FavouritesContext} from "../../../services/favourites/favourites.context";
import {FavouritesBar} from "../../../components/favourites/favourites-bar.component";

export const FavouritesScreen  =({navigation})=>{
    const {favourites} = useContext(FavouritesContext)
    return (
        <FavouritesBar favorites={favourites} onNavigate={navigation}/>
    )
}