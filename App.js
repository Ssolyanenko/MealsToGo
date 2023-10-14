import React from 'react'
import {StatusBar as ExpoStatusBar} from 'expo-status-bar';
import {RestaurantsScreen} from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
    return (
        <>
            <ExpoStatusBar style="auto"/>
          <RestaurantsScreen />
        </>
    );
}

