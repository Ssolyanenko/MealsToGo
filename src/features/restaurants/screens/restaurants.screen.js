import React, {useContext} from "react";
import {FlatList, View} from "react-native";
import {Searchbar} from "react-native-paper";
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
export const RestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const {restaurants, isLoading, isError} = useContext(RestaurantsContext)


    const onChangeSearch = query => setSearchQuery(query);
    return (
        <SafeArea>
            <SearchContainer>
                <Search onChange={onChangeSearch}/>
            </SearchContainer>
            <RestaurantList
                data={restaurants}
                renderItem={({item}) =>{
                    console.log(item)
                  return (
                    <RestaurantInfo restaurant={item}/>
                  )
                }}
                keyExtractor={(item) => item.name}

            />
        </SafeArea>
    )
}

