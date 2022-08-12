import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthContextProvider from './src/contexts/AuthContext';
import * as SplashScreen from 'expo-splash-screen'

// NAVIGATION
import Navigation from './src/navigation/Navigation';

 

export default function App() {
  return (
    <AuthContextProvider>
      <View style={styles.root}>
        <Navigation />
      </View>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
});