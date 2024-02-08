import React, {useContext} from "react";
import {AppNavigator} from "./app.navigator";
import {AuthContext} from "../../services/auth/auth.context";
import {NavigationContainer} from "@react-navigation/native";
import {AccountNavigator} from "./account.navigator";

export const Navigation = () => {
    const {isAuth} = useContext(AuthContext)
    return <NavigationContainer>
        {isAuth ? <AppNavigator/> : (
            <AccountNavigator/>
        )}
    </NavigationContainer>
};
