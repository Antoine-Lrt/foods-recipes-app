import React, { useEffect, useRef } from 'react';
import {
  Image, SafeAreaView, StyleSheet, View, ImageBackground, Text
} from 'react-native';

// HOOKS //
import {useForm} from 'react-hook-form'
import useMounted from '../../hooks/useMounted';

// FIREBASE //
import { useAuth } from '../../contexts/AuthContext';


// NAVIGATION //
import { useNavigation } from '@react-navigation/native'

// COMPONENTS //
import CustomButton from '../../components/CustomButton';
import CustomInputText from '../../components/CustomInputText';
import CustomInputPassword from '../../components/CustomInputPassword';
import SocialSignInButton from '../../components/SocialSignInButton'

//IMAGES
import image from '../../../assets/images/background.jpg'
import logo from '../../../assets/images/logo.png'




function SignIn() {

  const navigation = useNavigation()

  const {control, handleSubmit, formState: {errors}, watch} = useForm()

  

  const email = watch('email')
  const password = watch("password")
  
  const {isSignIn} = useAuth()

  const mounted = useMounted()

  const onSignPressed = (data) => {
    console.log(data)
    isSignIn(email, password)
    .then((res) => {
      console.log(res),
      navigation.navigate('TabBar')
    })
    .catch((error) => {
      console.log(error);
      switch(error.code) {
        case 'auth/user-not-found': alert("Aucun utilisateur trouvé");
        break
        case 'auth/wrong-password' : alert("Mot de passe incorrect");
        break
      }
    })
    .finally(() => mounted.current)
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
      <CustomInputText
        name="email"
        placeholder="Email"
        control={control}
        rules={{
          required: "Veuillez entrer votre email",
          pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Veuillez entrer un Email valide",
                      },}}
        
        
      />
      <CustomInputPassword
        name='password'
        placeholder="Mot de passe"
        secureTextEntry
        control={control}
        rules={{
          required: "Veuillez entrer votre mot de passe",
          minLength : {value: 8, message: "8 caractères minimum"}
          }}
          isShowIcon={true}
        
      />

      <CustomButton
        text="Se Connecter"
        onPress={handleSubmit(onSignPressed)}
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
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 5
  },

  imageBackground: {
    flex: 1,
    padding: 10,
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
