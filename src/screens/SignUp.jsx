import React, { useState, useEffect } from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native'

// NAVIGATION //
import { useNavigation } from '@react-navigation/native'

// HOOKS //
import {useForm} from 'react-hook-form'
import useMounted from '../hooks/useMounted'

// FIREBASE // 
import { useAuth } from '../contexts/AuthContext'


// COMPONENTS //
import CustomButton from '../components/CustomButton'
import CustomInputText from '../components/CustomInputText';
import CustomInputPassword from '../components/CustomInputPassword';
import SocialSignInButton from '../components/SocialSignInButton'

//IMAGES
import image from '../../assets/images/background.jpg'
import GLOBAL from '../constants/GLOBAL'



const SignUp = () => {

  const navigation = useNavigation()

  const {control, handleSubmit, watch} = useForm()

  const email= watch("email")
  const password= watch("password")
  const displayName = watch ("pseudo")


  
  const {isSignUp, updateProfile} = useAuth()

  const mounted = useMounted()

  const onSignUpPressed = (data) =>{
    console.log(data)
    isSignUp(email, password, displayName)
    .then((res) => {
      console.log(res);
      })
    .catch((error) => {
      console.log(error);
      switch(error.code) {
        case "auth/email-already-in-use" : alert("Un compte utilise déjà cet email");
        break
      }
    })
    .finally(() => mounted.current)
  }

  const onSigneIn= () =>{
    navigation.navigate('SignIn')
  }

  const onTermOfUser = () =>{
    console.warn("Conditions d'Utilisation");
  }

  const onPrivacyPolicy = () =>{
    console.warn("Politique de Confidentialité");
  }

  const onCookiesUtilisationst = () =>{
    console.warn("Utilisation de Cookies");
  }





  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground 
          source={image} 
          resizeMode="cover" 
          imageStyle={{opacity:.05}}
          style={styles.imageBackground}
          >
          <SafeAreaView style={styles.signupContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Créer un compte</Text>
              </View>
              <CustomInputText 
                  name="pseudo"
                  placeholder="Pseudo"
                  control={control}
                  rules={{
                    required: "Veuillez entrer un pseudo",
                    minLength : {value: 3, message: "3 caractères minimum"},
                    maxLength : {value: 20, message: "20 caractères maximum"},
                    }}
                  />
              <CustomInputText 
                  placeholder="Email"
                  name="email"
                  control={control}
                  rules={{
                    required: "Veuillez entrer un email",
                    pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Veuillez entrer un Email valide",
                      },
                    }}
                  />
              <CustomInputPassword 
                  placeholder="Mot de passe"
                  name="password"
                  control={control}
                  secureTextEntry
                  rules={{
                    required: "Veuillez entrer un mot de passe",
                    minLength : {value: 8, message: "8 caractères minimum"},
                  }}
                  isShowIcon={true}
                  />
              <CustomInputPassword 
                  placeholder="Confirmer le mot de passe"
                  name="confirm-password"
                  control={control}
                  secureTextEntry
                  rules={{
                    required: "Veuillez entrer un mot de passe",
                    validate: value => value === password ? true : "Le mot de passe ne correspond pas"
                  }}
                  isShowIcon={true}
                  />

                <CustomButton
                  text={"Créer un compte"}
                  onPress={handleSubmit(onSignUpPressed)}
                  />

                {/* <SocialSignInButton /> */}

                <CustomButton
                  text={'Déja un compte ? Se connecter'}
                  onPress={onSigneIn}
                  type={'SECOND'}
                  />
                <Text style={styles.textConditions}>
                  En vous inscrivant, vous acceptez les <Text style={styles.textConditionsLink} onPress={onTermOfUser}>Conditions d'Utilisation</Text> et la <Text style={styles.textConditionsLink} onPress={onPrivacyPolicy}>Politique de Confidentialité</Text>.
                </Text>
        </SafeAreaView>
      </ImageBackground>

  // </ScrollView>
    
  )
}

export default SignUp

const styles = StyleSheet.create({
  signupContainer:{
      flex:1,
      width:'100%',
      padding: 15,
      marginVertical: 5,
      alignItems:'center',
      borderRadius: 5,
      
  },

  imageBackground: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: 'center'
  },

  textContainer:{
    padding:20
  },

  text: {
    color: "black",
    fontSize: GLOBAL.TEXT.H2,
    fontFamily: 'Futura',
    fontWeight: '700' ,
  },
  
  logoImg:{
    width:250,
    height:250

  },

  textConditions: {
    color: "black",
    fontSize: GLOBAL.TEXT.TEXT,
    fontStyle: 'italic' ,
    fontFamily: 'Futura',
    fontWeight: 'light' ,
  
    
  },

  textConditionsLink: {
    color: "green",
  }
})