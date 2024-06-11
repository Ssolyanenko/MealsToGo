import React, {useContext, useState} from "react";
import {Text, TouchableOpacity} from 'react-native';
import {FavouritesContext} from "../../../services/favourites/favourites.context";
import {SafeArea} from "../../../components/utility/safe-area.component";
import styled from "styled-components/native";
import {RestaurantList} from "../../account/components/restourants-list.component";
import {Search} from "../../../components/search.component";
import {FavouritesBar} from "../../../components/favourites/favourites-bar.component";
import {RestaurantInfo} from "../../../components/restaurant-info.card-componet";

const FavouritesArea = styled(SafeArea)`
    align-items: center;
    justify-content: center;
`
export const FavouritesScreen = ({navigation}) => {
    const {favourites} = useContext(FavouritesContext)
    const [isToggled, setIsToggled] = useState(false)
    return (favourites?.length ? <SafeArea>
            <Search isFavoriteToggled={isToggled} onFavoriteToggle={() => setIsToggled(!isToggled)}/>
            {isToggled && <FavouritesBar favorites={favourites} onNavigate={navigation}/>}
            <RestaurantList
                data={favourites}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', {
                            restaurant: item
                        })}>
                            <RestaurantInfo restaurant={item}/>
                        </TouchableOpacity>

                    )
                }}
                keyExtractor={(item) => item.name}

            />
        </SafeArea> :
        <FavouritesArea>
            <Text>
                No favorites yet
            </Text>
        </FavouritesArea>)
}