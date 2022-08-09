import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//COMPONENTS

// import OnBoarding from '../screens/Authentication/OnBoarding';
import SignIn from '../screens/Authentication/SignIn';
import SignUp from '../screens/Authentication/SignUp';
import ConfirmEmail from '../screens/Authentication/ConfirmEmail'
import ForgotPassword from '../screens/Authentication/ForgotPassword';
import ResetPassword from '../screens/Authentication/ResetPassword'
import TabBar from './TabBar';
import RecipesDetails from '../screens/App/RecipesDetails';


const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name='OnBoarding' component={OnBoarding} /> */}
        <Stack.Screen name='SignIn' component={SignIn} options={{gestureEnabled: false}} />
        <Stack.Screen name='SignUp' component={SignUp} options={{gestureEnabled: false}} />
        <Stack.Screen name='ConfirmEmail' component={ConfirmEmail} options={{gestureEnabled: false}}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{gestureEnabled: false}} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} options={{gestureEnabled: false}} />
        <Stack.Screen name='TabBar' component={TabBar}  />
        <Stack.Screen name='RecipesDetails' component={RecipesDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation