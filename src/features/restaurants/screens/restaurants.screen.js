import React, {useContext} from "react";
import {FlatList, View} from "react-native";
import {ActivityIndicator, Searchbar, Colors} from "react-native-paper";
import {RestaurantInfo} from "../components/restaurant-info.card-componet";
import styled from "styled-components/native";
import {SafeArea} from "../components/utility/safe-area.component";
import {RestaurantsContext} from "../../../services/restaurants/mock/restaurants.context";


const SearchContainer = styled(View)`
  padding: 10px
`

const Search = styled(Searchbar)`
  background-color: ${props => props.theme.colors.bg.secondary};
`
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
export const RestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const {restaurants, isLoading, isError} = useContext(RestaurantsContext)

    const onChangeSearch = query => setSearchQuery(query);
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
            <SearchContainer>
                <Search style={{backgroundColor:'#fff'}} onChange={onChangeSearch}/>
            </SearchContainer>
            <RestaurantList
                data={restaurants}
                renderItem={({item}) =>{
                  return (
                    <RestaurantInfo restaurant={item}/>
                  )
                }}
                keyExtractor={(item) => item.name}

            />
        </SafeArea>
    )
}

