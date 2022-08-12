import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

const SocialSignInButton = () => {
    const onSignFacebook = () => {
        console.warn('Connecté avec Facebook');
      };
    
      const onSignGoogle = () => {
        console.warn('Connecté avec Google');
      };
    
      const onSignApple = () => {
        console.warn('Connecté avec Apple');
      };
  return (
    <View style={{padding:10 }}>
      <CustomButton
        text="Se connecter avec Facebook"
        onPress={onSignFacebook}
        bgColor="#c0c8e2"
        txtColor="#4765A9"
      />

      <CustomButton
        text="Se connecter avec Google"
        onPress={onSignGoogle}
        bgColor="#fda5a5"
        txtColor="#DD4D44"
      />

      <CustomButton
        text="Se connecter avec Apple"
        onPress={onSignApple}
        bgColor="#cfcfcf"
        txtColor="#363636"
      />

    </View>
  )
}

export default SocialSignInButton