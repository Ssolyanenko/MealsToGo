import {AccountContainer, AccountCover, AccountStyled, AuthButton} from "../components/account.styled";

export const RegisterScreen = () =>{
    return(
        <AccountStyled>
            <AccountCover/>
            <AccountContainer>
                <AuthButton
                    icon='lock-open-outline'
                    mode='contained'
                >Registration</AuthButton>
            </AccountContainer>
        </AccountStyled>
    )
}