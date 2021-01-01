import React                   from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";

import {
    View
} from "react-native";

const AppDrawer = createDrawerNavigator<HomeRoutes>();

export type HomeRoutes = {
    Home: undefined;
    Notifications: undefined;
}


const HomeNavigator = () => {
    return (
        <AppDrawer.Navigator>
            <AppDrawer.Screen name="Home" component={HomeScreen} />
            <AppDrawer.Screen name="Notifications" component={NotificationsScreen} />
        </AppDrawer.Navigator>
    );
};


function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        </View>
    );
}
function NotificationsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"red"}}>
        </View>
    );
}


export default HomeNavigator;
