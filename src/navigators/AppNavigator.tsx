import React                   from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";

import {AppRoutes} from "./Navigation";
import {
    OnBoarding,
    Welcome,
    Login,
    SignUp,
    PasswordChanged,
    ForgotPassword
} from "../Authentication";
import {
    Button,
    View
} from "react-native";

const AppDrawrer = createDrawerNavigator<AppRoutes>();

const AuthenticationNavigator = () => {
    return (
        <AppDrawrer.Navigator initialRouteName="Home">
            <AppDrawrer.Screen name="Home" component={HomeScreen} />
            <AppDrawrer.Screen name="Notifications" component={NotificationsScreen} />
        </AppDrawrer.Navigator>
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


export default AuthenticationNavigator;
