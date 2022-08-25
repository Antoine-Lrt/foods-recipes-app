import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
  const [onboarded, setOnboarded] = useState();

  useEffect(() => {
    getStorage();
  },[])

  const getStorage = async () => {
    const onboarded = await AsyncStorage.getItem('ONBOARDED')
    setOnboarded(onboarded)
  }

  console.log(onboarded);

  return (
    <AuthContextProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.root}>
            <Navigation onboarded={onboarded}/>
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