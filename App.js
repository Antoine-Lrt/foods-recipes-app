import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'

//DEPENDENCIES

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//COMPONENTS

import OnBoarding from './src/screens/Authentication/OnBoarding';
import SignIn from './src/screens/Authentication/SignIn';
import SignUp from './src/screens/Authentication/SignUp';
import ConfirmeEmail from './src/screens/Authentication/ConfirmEmail'
import ResetPassword from './src/screens/Authentication/ResetPassword'



const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen name='OnBoarding' component={OnBoarding} options={{headerShown: false}} />
    </AuthenticationStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <ResetPassword />
      {/* <ConfirmeEmail /> */}
      {/* <SignUp />  */}
      {/* <SignIn /> */}
      {/* <AuthenticationNavigator /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
