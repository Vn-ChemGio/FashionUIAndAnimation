import React                  from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthenticationNavigator, HomeNavigator} from ".";


export type AppStackRouters = {
    Authentication: undefined,
    App: undefined
}

const AppStack = createStackNavigator<AppStackRouters>();

const AppNavigator = () => {
    return (
        <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="Authentication" component={AuthenticationNavigator}/>
            <AppStack.Screen name="App" component={HomeNavigator}/>
        </AppStack.Navigator>
    );
};

export default AppNavigator;
