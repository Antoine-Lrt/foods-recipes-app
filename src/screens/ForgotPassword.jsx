import React, { useState } from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'

// NAVIGATION //
import { useNavigation } from '@react-navigation/native'

// HOOKS //
import {useForm} from 'react-hook-form'

// COMPONENTS //
import CustomButton from '../../components/CustomButton'
import CustomInputText from '../../components/CustomInputText';
import CustomInputPassword from '../../components/CustomInputPassword';

// CONSTANTS //
import GLOBAL from '../constants/GLOBAL'

// IMAGES //
import image from '../../../assets/images/background.jpg'
import { useAuth } from '../../contexts/AuthContext'





const ForgotPassword = () => {
  
  const {forgotPassword} = useAuth()
  const {control, handleSubmit, watch} = useForm()



  const email= watch("email")


  const navigation = useNavigation()


  const onSubmit = (data) =>{
    console.log(data)
    forgotPassword(email)
      .then(res => {
        console.log(res);
        alert("Email envoyé, vérifiez vos email")
      })
      .catch(error => {
        console.log(error);
      })
    // navigation.navigate('ResetPassword')
  }

  const onBackToSign = () =>{
    navigation.navigate('SignIn')

  }



  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground 
          source={image} 
          resizeMode="cover" 
          imageStyle={{opacity:.05}}
          style={styles.imageBackground}
          >
          <SafeAreaView style={styles.resetPasswordContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Modifier votre mot de passe</Text>
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
                      },
                    }}
                  />

              <CustomButton
                  text={"Envoyer"}
                  onPress={handleSubmit(onSubmit)}
                  width={350}
                  height={50}
                  />


              <CustomButton
                  text="Retour à la page de connexion"
                  onPress={onBackToSign}
                  type="SECOND"
                  width={350}
                  height={50}
                  fontWeight={'500'}
                  fontSize={GLOBAL.TEXT.TEXT}
                  
      />
                
        </SafeAreaView>
      </ImageBackground>

  // </ScrollView>
    
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    resetPasswordContainer:{
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
    padding:20,
  },

  text: {
    color: "black",
    fontSize: 25,
    fontFamily: 'Futura',
    fontWeight: '700' ,
    textAlign: 'center'
  },
  
  logoImg:{
    width:250,
    height:250

  },

  textConditions: {
    marginTop: 30,
    width: 300,
    color: "black",
    fontSize: 10,
    fontStyle: 'italic' ,
    fontFamily: 'Futura',
    fontWeight: 'light' ,
    
  },

  textConditionsLink: {
    color: "green",
  }
})