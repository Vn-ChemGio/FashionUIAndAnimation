import React                  from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Routes} from "./Navigation";
import {
    OnBoarding,
    Welcome,
    Login,
    SignUp,
    PasswordChanged,
    ForgotPassword
}               from "../Authentication";

const AuthenticationStack = createStackNavigator<Routes>();

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

export default AuthenticationNavigator;
