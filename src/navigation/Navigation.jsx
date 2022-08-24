import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// FIREBASE //
import { useAuth } from '../contexts/AuthContext';


//COMPONENTS
// import OnBoarding from '../screens/Authentication/OnBoarding';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ConfirmEmail from '../screens/ConfirmEmail'
import ForgotPassword from '../screens/ForgotPassword'
import TabBar from './TabBar';
import RecipesDetails from '../screens/RecipesDetails'


const Stack = createNativeStackNavigator()

const Navigation = () => {

  const {currentUser} = useAuth()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>

        {/* <Stack.Screen name='OnBoarding' component={OnBoarding} /> */}
        {!currentUser && <Stack.Screen name='SignIn' component={SignIn} options={{gestureEnabled: false}}/>}
        {!currentUser && <Stack.Screen name='SignUp' component={SignUp} options={{gestureEnabled: false}}/>}
        {!currentUser && <Stack.Screen name='ConfirmEmail' component={ConfirmEmail} options={{gestureEnabled: false}}/>}
        {!currentUser &&<Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{gestureEnabled: false}}/>}
        {currentUser &&<Stack.Screen name='TabBar' component={TabBar} options={{gestureEnabled: false}}/>}
        {currentUser &&<Stack.Screen name='RecipesDetails' component={RecipesDetails}/>}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation