import React, {useContext} from "react";
import {Text, TouchableOpacity} from "react-native";
import {AuthContext} from "../../../services/auth/auth.context";
import {SafeArea} from "../../../components/utility/safe-area.component";
import {List, Avatar} from "react-native-paper";
import styled from "styled-components/native";
import {SpacerComponent} from "../../../components/spacer/spacer.component";

const SettingsItem = styled(List.Item)`
    padding: ${props => props.theme.space[3]};`

const AvatarContainer = styled.View`
    align-items: center;
`
export const SettingsScreen = ({navigation}) => {
    const {onLogOut,user} = useContext(AuthContext)
    return (
        <SafeArea>
            <TouchableOpacity onPress={()=>navigation.navigate('Camera')}>
            <AvatarContainer>
                <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD"/>
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
        </SafeArea>
    )
};
