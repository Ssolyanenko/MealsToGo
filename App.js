import React from 'react'
import {StatusBar as ExpoStatusBar} from 'expo-status-bar';
import {RestaurantsScreen} from "./src/features/restaurants/screens/restaurants.screen";
import {ThemeProvider} from "styled-components";
import {theme} from "./src/infrastructure/theme";
import {  useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import {  useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import {Text} from "react-native";
import {SafeArea} from "./src/features/restaurants/components/utility/safe-area.component";
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const SettingsScreen = () => <SafeArea> <Text>SettingsScreen</Text> </SafeArea>
const MapScreen = () => <SafeArea> <Text>MapScreen</Text> </SafeArea>
 export default function App() {

    const [oswaldLoaded] = useOswald({
        Oswald_400Regular,
    });
    const [latoLoaded] = useLato({
        Lato_400Regular,
    });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

    return (
        <>
           <ThemeProvider theme={theme}>
               <NavigationContainer>
                   <Tab.Navigator  screenOptions={({ route }) => ({
                       tabBarIcon: ({ focused, color, size }) => {
                           let iconName;
                           if (route.name === 'RestaurantsScreen') {
                               iconName = 'md-restaurant'
                           } else if (route.name === 'Settings') {
                               iconName = 'md-settings'
                           }else if(route.name === 'Map') {
                               iconName = 'md-map'
                           }

                           return <Ionicons name={iconName} size={size} color={color} />;
                       },
                       tabBarActiveTintColor: 'tomato',
                       tabBarInactiveTintColor: 'gray',
                   })}
                   >
                       <Tab.Screen name="RestaurantsScreen"  component={RestaurantsScreen} />
                       <Tab.Screen name="Map" component={MapScreen} />
                       <Tab.Screen name="Settings" component={SettingsScreen} />
                   </Tab.Navigator>
               </NavigationContainer>
           </ThemeProvider>
            <ExpoStatusBar style="auto"/>
        </>
    );
}

