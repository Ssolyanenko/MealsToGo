import React, {useState, useContext} from "react";
import {Text} from "../../../components/typography/text.component";
import {AuthContext} from "../../../services/auth/auth.context";
import {AccountContainer, AccountCover, AccountStyled, AuthButton} from "../components/account.styled";
import {TextInput} from "react-native-paper";

export const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {onLogin, error} = useContext(AuthContext);
    return (
        <AccountStyled>
            <AccountCover/>
            <AccountContainer>
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
                {error && (
                    <Text variant="error">{error}</Text>
                )}
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => onLogin(email, password)}
                >
                    Login
                </AuthButton>
            </AccountContainer>
        </AccountStyled>
    );
};
