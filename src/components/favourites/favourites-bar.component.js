import React from "react";
import {ScrollView, TouchableOpacity, View} from "react-native";
import styled from "styled-components/native";
import {CompactRestaurantInfo} from "../restaurant/compact-restaurant-info.component";

const FavouritesWrapper = styled.View`
    padding: 10px;
`
export const FavouritesBar = ({favorites, onNavigate}) => {

    return (
        <FavouritesWrapper>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {favorites.map((restaurant) => {
                const key = restaurant.name.split(" ").join("")
                return (<View key={key} style={{marginRight: 10}}>
                    <TouchableOpacity onPress={() => onNavigate.navigate('RestaurantDetail', {
                        restaurant
                    })}>
                        <CompactRestaurantInfo restourant={restaurant}/>
                    </TouchableOpacity>
                </View>)
            })}
        </ScrollView>
    </FavouritesWrapper>
    )
}