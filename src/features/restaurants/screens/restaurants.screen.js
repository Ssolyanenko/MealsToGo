import React from "react";
import {FlatList, View} from "react-native";
import {Searchbar} from "react-native-paper";
import {RestaurantInfo} from "../components/restaurant-info.card-componet";
import styled from "styled-components/native";
import {SafeArea} from "../components/utility/safe-area.component";


const SearchContainer = styled(View)`
  padding: 10px
`

const Search = styled(Searchbar)`
  background-color: ${props => props.theme.colors.bg.secondary};
`
const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle:{
        padding:16
    }
})``
export const RestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <SafeArea>
            <SearchContainer>
                <Search onChange={onChangeSearch}/>
            </SearchContainer>
            <RestaurantList
                data={[{name:1},{name:2},{name:3}]}
                renderItem={()=> <RestaurantInfo/>}
                keyExtractor={(item)=>item.name}

            />

        </SafeArea>
    )
}

