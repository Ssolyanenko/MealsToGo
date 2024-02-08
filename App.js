import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import React from "react";
import {ThemeProvider} from "styled-components/native";
import {
    useFonts as useOswald,
    Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {useFonts as useLato, Lato_400Regular} from "@expo-google-fonts/lato";
import {theme} from "./src/infrastructure/theme";
import {LocationContextProvider} from "./src/services/location/location.context";
import {FavouritesContextProvider} from "./src/services/favourites/favourites.context";
import {RestaurantsContextProvider} from "./src/services/restaurants/mock/restaurants.context";
import {Navigation} from "./src/infrastructure/navigation";
import firebase from "firebase/compat";
import {app} from "./firebaseConfig";
import {AuthContextProvider} from "./src/services/auth/auth.context";

if(!firebase.app.length){
    firebase.initializeApp(app)
}

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
                <AuthContextProvider>
                <FavouritesContextProvider>
                    <LocationContextProvider>
                        <RestaurantsContextProvider>
                            <Navigation/>
                        </RestaurantsContextProvider>
                    </LocationContextProvider>
                </FavouritesContextProvider>
                </AuthContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto"/>
        </>
    );
}

