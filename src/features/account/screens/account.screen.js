import {AccountContainer, AccountCover, AccountStyled, AuthButton} from "../components/account.styled";
import {View} from "react-native";
export const AccountScreen = ({navigation}) =>{
    return(
        <AccountStyled>
            <AccountCover/>
            <AccountContainer>
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