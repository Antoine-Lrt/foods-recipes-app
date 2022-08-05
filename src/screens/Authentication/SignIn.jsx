import React, { useState } from 'react';
import {
  Image, SafeAreaView, StyleSheet, View, ImageBackground
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import SocialSignInButton from '../../components/SocialSignInButton'
import logo from '../../../assets/images/logo.png'
import image from '../../../assets/images/background.jpg'

import { useNavigation } from '@react-navigation/native';



function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()

  const onSignPressed = () => {
    //user valide
    navigation.navigate('TabBar')
  };

  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword')
  };

  const onCreateAccount = () => {
    navigation.navigate('SignUp')
  };

 

  return (
  // <ScrollView showsVerticalScrollIndicator={false}>
  <ImageBackground 
  source={image} 
  resizeMode="cover" 
  imageStyle={{opacity:.05}}
  style={styles.imageBackground}
  >
    <SafeAreaView style={styles.signinContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={logo}
          style={styles.logoImg}
        />
      </View>
      <CustomInput
        placeholder="Email"
        value={email}
        setValue={setEmail}
        secureText={false}
      />
      <CustomInput
        placeholder="Mot de passe"
        value={password}
        setValue={setPassword}
        secureText
      />
      <CustomButton
        text="Se Connecter"
        onPress={onSignPressed}
      />

      <CustomButton
        text="Mot de passe oublié"
        type="SECOND"
        onPress={onForgotPassword}
      />
   
      <SocialSignInButton />

      <CustomButton
        text="Pas de compte ? Créer un compte"
        onPress={onCreateAccount}
        type="SECOND"
      />
    </SafeAreaView>
  </ImageBackground>

  // </ScrollView>

  );
}

export default SignIn;

const styles = StyleSheet.create({
  signinContainer: {
    flex: 1,
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },

  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },

  logoContainer: {
  },

  logoImg: {
    width: 250,
    height: 250,

  },
});
