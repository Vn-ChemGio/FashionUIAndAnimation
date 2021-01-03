import React                                       from 'react';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import {
    OnBoarding,
    Welcome,
    Login,
    SignUp,
    PasswordChanged,
    ForgotPassword
}                                                  from "../Authentication";
import {CompositeNavigationProp, RouteProp}        from "@react-navigation/native";
import {DrawerNavigationProp}                      from "@react-navigation/drawer";
import {HomeRoutes}                                from "./HomeNavigator";


export type AuthenticationRoutes = {
    OnBoarding: undefined;
    Welcome: undefined;
    Login: undefined,
    SignUp: undefined,
    ForgotPassword: undefined,
    PasswordChanged: undefined
}


const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();

const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator headerMode="none" initialRouteName="OnBoarding">
            <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding}/>
            <AuthenticationStack.Screen name="Welcome" component={Welcome}/>
            <AuthenticationStack.Screen name="Login" component={Login}/>
            <AuthenticationStack.Screen name="SignUp" component={SignUp}/>
            <AuthenticationStack.Screen name="ForgotPassword" component={ForgotPassword}/>
            <AuthenticationStack.Screen name="PasswordChanged" component={PasswordChanged}/>
        </AuthenticationStack.Navigator>
    );
};

export interface AuthenticationProps<RouteName extends keyof AuthenticationRoutes> {
    navigation: CompositeNavigationProp<StackNavigationProp<AuthenticationRoutes, RouteName>,
        DrawerNavigationProp<HomeRoutes, "Home">>,
    route: RouteProp<AuthenticationRoutes, RouteName>;
}

export default AuthenticationNavigator;
