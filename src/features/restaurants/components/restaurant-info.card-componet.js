import React from 'react';
import styled from "styled-components/native";
import {Card} from "react-native-paper";
import {View, Image} from "react-native";
import {SvgXml} from "react-native-svg";
import star from '../../../../assets/star'
import openSvg from "../../../../assets/openSvg";
import {SpacerComponent} from "./spacer/spacer.component";
import {Text} from "./typography/text.component";

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
const Section = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`
const SectionEnd = styled(View)`
    flex-direction: row;
    justify-content: end;
 
`
const Icon = styled(Image)`
`
export const RestaurantInfo = ({restaurant = {}}) => {
    const {
        name = 'MARKET',
        icon =  "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
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
                        <Text variant='label' style={{marginBottom:5,marginLeft:5}} >{name}</Text>
                        <Section>
                        <Rating>
                            {ratingArray.map(() => {
                                return <SvgXml xml={star} width='20' height='20'/>
                            })}
                        </Rating>
                            <SectionEnd>
                            <SpacerComponent position='top' size='large'>
                            {
                                isCloseTemporarily && (
                                    <Text
                                        variant='error' style={{marginRight:10}}>
                                        CLOSED TEMPORARILY
                                    </Text>
                                )
                            }
                            </SpacerComponent>
                                <SpacerComponent position='left' size='medium'>
                                {isOpenNow && <SvgXml style={{marginRight:10}} xml={openSvg} width='20' height='20'/>}
                                </SpacerComponent>

                            <Icon  source={{uri:icon}}/>
                            </SectionEnd>
                        </Section>
                        <Address>{address}</Address>
                    </Info>
                </Card.Content>
            </RestaurantCard>
        </>
    )
}
