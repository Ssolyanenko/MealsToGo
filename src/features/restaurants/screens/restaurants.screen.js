import React, {useContext} from "react";
import {FlatList, TouchableOpacity, View} from "react-native";
import {ActivityIndicator} from "react-native-paper";
import {RestaurantInfo} from "../components/restaurant-info.card-componet";
import styled from "styled-components/native";
import {SafeArea} from "../components/utility/safe-area.component";
import {RestaurantsContext} from "../../../services/restaurants/mock/restaurants.context";
import {Search} from "../components/search.component";


const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16
    }
})``
const Loading = styled(ActivityIndicator)`
margin-left: -25px;
`
const LoadingContainer = styled(View)`
  position: absolute;
  top:50%;
  left:50%;
`
export const RestaurantsScreen = ({navigation}) => {
    const {restaurants, isLoading} = useContext(RestaurantsContext)

    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                <Loading
                size={50}
                style={{marginLeft:-25}}
                animating={true}
                color={'blue'}
                />
                </LoadingContainer>
            )}
          <Search/>
            <RestaurantList
                data={restaurants}
                renderItem={({item}) =>{
                  return (
                      <TouchableOpacity onPress={()=>navigation.navigate('RestaurantDetail', {
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

