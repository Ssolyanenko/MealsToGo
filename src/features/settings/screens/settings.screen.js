import React, {useContext} from "react";
import {AuthContext} from "../../../services/auth/auth.context";
import {SafeArea} from "../../../components/utility/safe-area.component";
import {List} from "react-native-paper";

export const SettingsScreen = () => {
    const {onLogOut} = useContext(AuthContext)
    return (
        <SafeArea>
           <List.Section>
               <List.Section>
                   <List.Item
                       style={{ padding: 16 }}
                       title="Favourites"
                       description="View your favourites"
                       left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                       onPress={() => navigation.navigate("Favourites")}
                   />
                   <List.Item
                       style={{ padding: 16 }}
                       title="Logout"
                       left={(props) => <List.Icon {...props} color="black" icon="door" />}
                       onPress={onLogOut}
                   />
               </List.Section>
           </List.Section>
        </SafeArea>
    )
};
