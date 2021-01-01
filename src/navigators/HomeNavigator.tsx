import React                   from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";

import {
    Button,
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


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}
function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}


export default HomeNavigator;
