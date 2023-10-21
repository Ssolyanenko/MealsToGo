import React from 'react';
import {Button, Image, Text, StyleSheet} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {Card} from "react-native-paper";


export const RestaurantInfo = ({restaurant = {}}) => {
    const {
        name = 'MARKET',
        icon = <Ionicons name="cafe" size={24} color="black"/>,
        photos = [
            'https://lh3.googleusercontent.com/p/AF1QipO9uroF5Es07DqrbM1wiAWgU3O26QboCdNvSVL_=s1360-w1360-h1020'],
        address = 'W DOHA',
        openingHours = '07:00 - 23:00',
        isOpenNow = true,
        rating = '5',
        isCloseTemporarily = false,
    } = restaurant
    return (
        <>
            <Card style={styles.card} elevation={5}>
                <Card.Content>
                    <Card.Cover key={name} style={{width: '100%'}} source={{uri: photos[0]}}/>
                    <Card.Title style={styles.title} title={name}/>
                </Card.Content>
            </Card>
        </>


    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white'
    },
    title: {
        padding: 16
    }
})