import styled from "styled-components/native";
import {Callout} from "react-native-maps";

const MyText = styled.Text`
text-align: center;
`
const StyledImage= styled.Image`
  height: 100px;
  width:230px;
  
`

export const MapCallout = ({restourant}) => {
    console.log(restourant.photos)
    return (
        <Callout>
            <MyText>
                <StyledImage source={{uri: restourant.photos[0]}} resizeMode='cover'/>
            </MyText>
            <MyText>{restourant.name}</MyText>
        </Callout>
    )
}