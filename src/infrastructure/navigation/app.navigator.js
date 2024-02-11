import React, {useContext} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text,Button } from "react-native";

import { RestaurantsNavigator } from "./restaurants.navigator";
import {SafeArea} from "../../components/utility/safe-area.component";
import {MapScreen} from "../../features/map/screens/map.screen";
import {AuthContext} from "../../services/auth/auth.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
};

const Settings = () => {
    const {onLogOut} =  useContext(AuthContext)
    return (
        <SafeArea>
            <Text>Settings</Text>
            <Button title={'logOut'} onPress={onLogOut}/>
        </SafeArea>
        )
};

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
    };
};

export const AppNavigator = () => (
        <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
            }}
        >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
);
