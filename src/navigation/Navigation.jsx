import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// FIREBASE //
import { useAuth } from '../contexts/AuthContext';


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

  const {currentUser} = useAuth()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!currentUser 
          ? (
            <>
            <Stack.Screen name='SignIn' component={SignIn} options={{gestureEnabled: false}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{gestureEnabled: false}}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{gestureEnabled: false}}/>
        <Stack.Screen name='ResetPassword' component={ResetPassword} options={{gestureEnabled: false}}/>

            </>

          )
        : (
            <>
            <Stack.Screen name='ConfirmEmail' component={ConfirmEmail} options={{gestureEnabled: false}}/>
          <Stack.Screen name='TabBar' component={TabBar} options={{gestureEnabled: false}}/>
          <Stack.Screen name='RecipesDetails' component={RecipesDetails}/>
            </>

        )


        }
      
       
       
         
    
        
          
        
        {/* <Stack.Screen name='OnBoarding' component={OnBoarding} /> */}
        {/* {!currentUser && <Stack.Screen name='SignIn' component={SignIn} options={{gestureEnabled: false}}/>}
        {!currentUser && <Stack.Screen name='SignUp' component={SignUp} options={{gestureEnabled: false}}/>}
        {!currentUser && <Stack.Screen name='ConfirmEmail' component={ConfirmEmail} options={{gestureEnabled: false}}/>}
        {!currentUser &&<Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{gestureEnabled: false}}/>}
        {!currentUser && <Stack.Screen name='ResetPassword' component={ResetPassword} options={{gestureEnabled: false}}/>}
        {currentUser &&<Stack.Screen name='TabBar' component={TabBar} options={{gestureEnabled: false}}/>}
        {currentUser &&<Stack.Screen name='RecipesDetails' component={RecipesDetails}/>} */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation