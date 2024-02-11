import React, {useState, useContext} from "react";
import {Text} from "../../../components/typography/text.component";
import {AuthContext} from "../../../services/auth/auth.context";
import {
    AccountContainer,
    AccountCover,
    AccountStyled,
    AuthButton,
    ErrorContainer,
    Tittle
} from "../components/account.styled";
import {ActivityIndicator, TextInput} from "react-native-paper";

export const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {onLogin, error,isLoading} = useContext(AuthContext);
    return (
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
                    style={{width: 300, marginBottom:10}}
                />
                {error && (
                    <ErrorContainer>
                    <Text  variant="error">{error}</Text>
                    </ErrorContainer>
                )}
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => onLogin(email, password)}
                    >{isLoading ? <ActivityIndicator size="small" animating={true} color='white'/> : <Text style={{color:'white'}}>Login</Text>}</AuthButton>
            </AccountContainer>
            <AuthButton
                mode="contained"
                onPress={()=>navigation.goBack()}
                style={{marginTop:20,width:'50%',alignSelf:'center',}}
            >
                Back
            </AuthButton>
        </AccountStyled>
    );
};
