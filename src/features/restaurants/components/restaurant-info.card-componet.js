import React from 'react';
import styled from "styled-components/native";
import {Ionicons} from '@expo/vector-icons';
import {Card} from "react-native-paper";
import {View, Text} from "react-native";
import {SvgXml} from "react-native-svg";
import star from '../../../../assets/star'

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  padding: ${props => props.theme.space[2]};
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.ui.primary};
`
const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.ui.tertiary};`
const RestaurantCardCover = styled(Card.Cover)`
`
const Info = styled(View)`
  padding: ${props => props.theme.space[2]};
`
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  padding: ${props => props.theme.space[2]};
  font-size: ${props => props.theme.fontSizes.caption};
`
const Rating = styled(View)`
  flex-direction: row;
  padding-left: ${props => props.theme.space[1]};

`
export const RestaurantInfo = ({restaurant = {}}) => {
    const {
        name = 'MARKET',
        icon = <Ionicons name="cafe" size={24} color="black"/>,
        photos = [
            'https://lh3.googleusercontent.com/p/AF1QipO9uroF5Es07DqrbM1wiAWgU3O26QboCdNvSVL_=s1360-w1360-h1020'],
        address = 'W DOHA',
        openingHours = '07:00 - 23:00',
        isOpenNow = true,
        rating = '5',
        isCloseTemporarily = false,
    } = restaurant

    const ratingArray = Array.from(new Array(Math.floor(rating)))
    return (
        <>
            <RestaurantCard elevation={5}>
                <Card.Content>
                    <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
                    <Info>
                        <Title>{name}</Title>
                        <Rating>
                            {ratingArray.map(() => {
                                return <SvgXml xml={star} width='20' height='20'/>
                            })}
                        </Rating>
                        <Address>{address}</Address>
                    </Info>
                </Card.Content>
            </RestaurantCard>
        </>
    )
}
