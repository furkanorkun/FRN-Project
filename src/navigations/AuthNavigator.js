import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER} from '../constants/RouteNames';
import Login from '../screens/Login';
import Register from '../screens/Register';

const AuthNavigator = () => {
  //createStackNavigator() gives us an object, then we can add some things like Navigator, Screen
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
