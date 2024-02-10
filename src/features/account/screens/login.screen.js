import {AccountContainer, AccountCover, AccountStyled, AuthButton} from "../components/account.styled";

export const LoginScreen = () =>{
    return(
        <AccountStyled>
            <AccountCover/>
            <AccountContainer>
                <AuthButton
                    icon='lock-open-outline'
                    mode='contained'
                >Login</AuthButton>
            </AccountContainer>
        </AccountStyled>
    )
}