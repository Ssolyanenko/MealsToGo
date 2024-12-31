import React, {useContext, useState} from "react";
import {Text, TouchableOpacity} from "react-native";
import {AuthContext} from "../../../services/auth/auth.context";
import {SafeArea} from "../../../components/utility/safe-area.component";
import {List, Avatar} from "react-native-paper";
import styled from "styled-components/native";
import {SpacerComponent} from "../../../components/spacer/spacer.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useFocusEffect} from "@react-navigation/native";

const SettingsItem = styled(List.Item)`
    padding: ${props => props.theme.space[3]};`

const AvatarContainer = styled.View`
    align-items: center;
`
export const SettingsScreen = ({navigation}) => {
    const {onLogOut, user} = useContext(AuthContext)
    const [photo, setPhoto] = useState(null)
    const getProfilePicture = async () => {
        const photoUri = await AsyncStorage.getItem(`${user.uid}-photo`)
        if (photoUri) {
            setPhoto(photoUri)
        }
    }
    useFocusEffect(() => {
        getProfilePicture()
    })
    return (<SafeArea>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
            <AvatarContainer>
                {photo ? (<Avatar.Image size={180} source={{uri: photo}} backgroundColor="#2182BD"/>) : (
                    <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD"/>)}

            </AvatarContainer>
        </TouchableOpacity>
        <SpacerComponent position='top' size='large' marginTop={20}>
            <Text variant="label" alignSelf='center'>
                {user.email}
            </Text>
        </SpacerComponent>
        <List.Section>
            <List.Section>
                <SettingsItem
                    style={{padding: 16}}
                    title="Favourites"
                    description="View your favourites"
                    left={(props) => <List.Icon {...props} color="black" icon="heart"/>}
                    onPress={() => navigation.navigate("Favourites")}
                />
                <SettingsItem
                    style={{padding: 16}}
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="door"/>}
                    onPress={onLogOut}
                />
            </List.Section>
        </List.Section>
    </SafeArea>)
};
