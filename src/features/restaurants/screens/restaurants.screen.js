import React, {useContext, useState} from "react";
import {FlatList, TouchableOpacity, View} from "react-native";
import {ActivityIndicator} from "react-native-paper";
import {RestaurantInfo} from "../../../components/restaurant-info.card-componet";
import styled from "styled-components/native";
import {SafeArea} from "../../../components/utility/safe-area.component";
import {RestaurantsContext} from "../../../services/restaurants/mock/restaurants.context";
import {Search} from "../../../components/search.component";
import {FavouritesBar} from "../../../components/favourites/favourites-bar.component";
import {FavouritesContext} from "../../../services/favourites/favourites.context";
import {RestaurantList} from "../../account/components/restourants-list.component";



const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`
const LoadingContainer = styled(View)`
    position: absolute;
    top: 50%;
    left: 50%;
`
export const RestaurantsScreen = ({navigation}) => {
    const {restaurants, isLoading} = useContext(RestaurantsContext)
    const {favourites} = useContext(FavouritesContext)
    const [isToggled, setIsToggled] = useState(false)

    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading
                        size={50}
                        style={{marginLeft: -25}}
                        animating={true}
                        color={'blue'}
                    />
                </LoadingContainer>
            )}
            <Search isFavoriteToggled={isToggled} onFavoriteToggle={() => setIsToggled(!isToggled)}/>
            {isToggled && <FavouritesBar favorites={favourites} onNavigate={navigation}/>}
            <RestaurantList
                data={restaurants}
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
        </SafeArea>
    )
}

