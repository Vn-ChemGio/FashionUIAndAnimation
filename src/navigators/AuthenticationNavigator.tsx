import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Routes} from "./Navigation";
import {
    OnBoarding,
    Welcome
}               from "../Authentication";

const AuthenticationStack = createStackNavigator<Routes>();

const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator headerMode="none" initialRouteName="OnBoarding">
            <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding}/>
            <AuthenticationStack.Screen name="Welcome" component={Welcome}/>

        </AuthenticationStack.Navigator>
    );
};

export default AuthenticationNavigator;