import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'

// NAVIGATION

import Navigation from './src/navigation/Navigation';
 




// const AuthenticationStack = createStackNavigator();
// const AuthenticationNavigator = () => {
//   return (
//     <AuthenticationStack.Navigator>
//       <AuthenticationStack.Screen name='OnBoarding' component={OnBoarding} options={{headerShown: false}} />
//     </AuthenticationStack.Navigator>
//   )
// }

export default function App() {
  return (
    <View style={styles.root}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
});