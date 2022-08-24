import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'

// NAVIGATION
import Navigation from './src/navigation/Navigation';

// CONSTANTS //
import GLOBAL from './src/constants/GLOBAL';

// CONTEXTS //
import AuthContextProvider from './src/contexts/AuthContext';

// REDUX //
import {Provider} from 'react-redux'
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react'



export default function App() {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.root}>
            <Navigation />
          </View>
        </PersistGate>
      </Provider>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: GLOBAL.COLOR.BACKGROUND,
  },
});