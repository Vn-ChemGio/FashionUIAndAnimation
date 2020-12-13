import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from "../src/Authentication/OnBoarding";
const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
      <AuthenticationStack.Navigator headerMode="none">
        <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />

      </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
