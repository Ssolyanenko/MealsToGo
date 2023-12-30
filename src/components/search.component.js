import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components/native";
import {Searchbar} from "react-native-paper";
import {View} from "react-native";
import {LocationContext} from "../services/location/location.context";

const SearchContainer = styled(View)`
  padding: 10px
`

const SearchBarStyled = styled(Searchbar)`
  background-color: ${props => props.theme.colors.bg.secondary};
`

export const Search = () => {
    const {keyword, search} = useContext(LocationContext)
    const [searchKeyword, setSearchKeyword] = useState(keyword)
    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);
    return (
        <SearchContainer>
            <SearchBarStyled
                placeholder='Search for a loaction'
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword)
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text)
                }}
                style={{backgroundColor: '#fff'}}/>
        </SearchContainer>
    )
}
