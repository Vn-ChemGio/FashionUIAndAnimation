import React                   from 'react';
import {createStackNavigator}  from '@react-navigation/stack';

import {AuthenticationNavigator, HomeNavigator} from ".";


export type AppStackRouters = {
    Authentication: undefined,
    Home          : undefined
}

const AppStack = createStackNavigator<AppStackRouters>();

const AppNavigator = () => {
    return (
        <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="Authentication" component={AuthenticationNavigator}/>
            <AppStack.Screen name="Home" component={HomeNavigator}/>
        </AppStack.Navigator>
    );
};

export default AppNavigator;
