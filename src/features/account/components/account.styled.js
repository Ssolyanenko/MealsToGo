import {ImageBackground, View, StyleSheet} from "react-native";
import image from '../../../../assets/home_bg.jpg'
import styled from "styled-components/native";
import {colors} from "../../../infrastructure/theme/colors";
import {Button} from "react-native-paper";
export const AccountStyled = ({children}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                {children}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
});

export const AccountCover = styled.View`
 position: absolute;
 width: 100%;
 height: 100%;
 background-color: rgba(255,255,255,0.2);
`

export const AccountContainer = styled.View`
    background-color: rgba(255,255,255,0.6);
    padding: ${(props)=>props.theme.space[4]};
    margin-top: ${(props)=>props.theme.space[2]};
`

export const AuthButton = styled(Button).attrs({
    buttonColor: colors.brand.primary,
})`padding: ${(props)=>props.theme.space[2]}`

export const Tittle = styled.Text`
text-align: center;
align-self: center;
font-size: 25px;
margin-bottom: 20px;
`
export const ErrorContainer = styled.View`
max-width: 300px;
align-items: center;
align-self: center;
margin-top: ${(props)=>props.theme.space[2]};
margin-bottom: ${(props)=>props.theme.space[2]};    
`

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  bottom: 55%;
`
