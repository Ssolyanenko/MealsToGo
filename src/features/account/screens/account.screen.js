import {AccountContainer, AccountCover, AccountStyled, AuthButton, Tittle,AnimationWrapper} from "../components/account.styled";
import {View} from "react-native";
import LottieView from 'lottie-react-native';

export const AccountScreen = ({navigation}) =>{
    return(
        <AccountStyled>
            <AccountCover/>
            <AnimationWrapper>
            <LottieView
                autoPlay
                source={require('../../../../assets/watermelon.json')}
            />
            </AnimationWrapper>
            <AccountContainer>
                <Tittle>Meals To Go</Tittle>
               <AuthButton
               icon='lock-open-outline'
               mode='contained'
               onPress={()=>navigation.navigate('Login')}
               >Login</AuthButton>
                <View style={{marginTop:15}}>
                <AuthButton
                    icon='account-plus-outline'
                    mode='contained'
                    onPress={()=>navigation.navigate('Register')}
                >Registration</AuthButton>
                </View>
            </AccountContainer>
        </AccountStyled>
    )
}
