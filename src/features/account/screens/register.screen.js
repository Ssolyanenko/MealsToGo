import {
    AccountContainer,
    AccountCover,
    AccountStyled,
    AuthButton,
    ErrorContainer,
    Tittle
} from "../components/account.styled";
import {ActivityIndicator, TextInput} from "react-native-paper";
import {Text} from "../../../components/typography/text.component";
import {useContext, useState} from "react";
import {AuthContext} from "../../../services/auth/auth.context";

export const RegisterScreen = ({navigation}) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const {onRegister,isLoading, error} = useContext(AuthContext)
    return(
        <AccountStyled>
            <AccountCover/>
            <AccountContainer>
                <Tittle>Meals To Go</Tittle>
                <TextInput
                    label="E-mail"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                    style={{width: 300, marginBottom: 20}}
                />
                <TextInput
                    label="Password"
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    secure
                    onChangeText={(p) => setPassword(p)}
                    style={{width: 300, marginBottom: 20}}
                />
                <TextInput
                    label="Repeat Password"
                    value={repeatedPassword}
                    textContentType="RepeatedPassword"
                    secureTextEntry
                    autoCapitalize="none"
                    secure
                    onChangeText={(p) => setRepeatedPassword(p)}
                    style={{width: 300, marginBottom: 20}}
                />
                {error && (
                    <ErrorContainer>
                        <Text  variant="error">{error}</Text>
                    </ErrorContainer>
                )}
               <AuthButton
                    icon='mail'
                    mode='contained'
                    onPress={()=>onRegister(email,password,repeatedPassword)}
                >{isLoading ? <ActivityIndicator size="small" animating={true} color='white'/> : <Text style={{color:'white'}}>Registration</Text>}</AuthButton>
            </AccountContainer>
            <AuthButton
                mode="contained"
                onPress={()=>navigation.goBack()}
                style={{marginTop:20,width:'50%',alignSelf:'center',}}
            >
                Back
            </AuthButton>
        </AccountStyled>
    )
}