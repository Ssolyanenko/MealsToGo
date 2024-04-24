import styled from "styled-components/native";
import {Card} from "react-native-paper";
import {View,Text
} from "react-native";

export const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  padding: ${props => props.theme.space[2]};
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.ui.primary};
  
`
export const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.ui.tertiary};
  margin-bottom: ${props => props.theme.space[3]};
`
export const RestaurantCardCover = styled(Card.Cover)`
`
export const Info = styled(View)`
  padding: ${props => props.theme.space[2]};
`
export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  padding: ${props => props.theme.space[2]};
  font-size: ${props => props.theme.fontSizes.caption};
`
export const Rating = styled(View)`
  flex-direction: row;
  padding-left: ${props => props.theme.space[1]};
`
export const Section = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`
export const SectionEnd = styled(View)`
    flex-direction: row;
    justify-content: end;
 
`
