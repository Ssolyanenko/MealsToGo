import React from "react";
import {SafeAreaView, StatusBar, StyleSheet, View} from "react-native";
import {Searchbar} from "react-native-paper";
import {RestaurantInfo} from "../components/restaurant-info.componet";

export const RestaurantsScreen = ()=>{
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return(
        <SafeAreaView style={{flex: 1, paddingTop: StatusBar.currentHeight }}>
            <View style={styles.search}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
            <View style={{flex: 1, backgroundColor: 'blue', padding: 16}}>
               <RestaurantInfo/>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    search:{
        padding:10
    }
})
