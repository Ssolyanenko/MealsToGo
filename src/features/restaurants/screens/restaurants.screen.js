import React from "react";
import {SafeAreaView, StatusBar, View} from "react-native";
import {Searchbar} from "react-native-paper";
import {RestaurantInfo} from "../components/restaurant-info.card-componet";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`}
`
const SearchContainer = styled(View)`
  padding: 10px
`
const RestaurantContainerList = styled(View)`
  flex: 1;
  background-color: ${(props => props.theme.colors.bg.primary)};
  padding: 16px;
`
const Search = styled(Searchbar)`
  background-color: ${props => props.theme.colors.bg.secondary};
`
export const RestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <SafeArea>
            <SearchContainer>
                <Search onChange={onChangeSearch}/>
            </SearchContainer>
            <RestaurantContainerList>
                <RestaurantInfo/>
            </RestaurantContainerList>
        </SafeArea>
    )
}

