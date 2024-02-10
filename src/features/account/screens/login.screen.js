import {AccountContainer, AccountCover, AccountStyled, AuthButton} from "../components/account.styled";
import {useContext, useState} from "react";
import {ActivityIndicator, TextInput} from "react-native-paper";
import {AuthContext} from "../../../services/auth/auth.context";

export const LoginScreen = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {onLogin,isLoading} = useContext(AuthContext)
if(isLoading) return <ActivityIndicator/>
    return(
        <AccountStyled>
            <AccountCover/>
            <AccountContainer>
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={{marginBottom:10, width:300}}
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={{marginBottom:10, width:300}}
                />
                <AuthButton
                    icon='lock-open-outline'
                    mode='contained'
                    onPress={()=>onLogin(email, password)}
                >Login</AuthButton>
            </AccountContainer>
        </AccountStyled>
    )
}