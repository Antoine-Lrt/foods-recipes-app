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

// IMAGES //
import image from '../../../assets/images/background.jpg'





const ForgotPassword = () => {

  const {control, handleSubmit} = useForm()

  const navigation = useNavigation()


  const onSubmit = (data) =>{
    console.warn(data)
    navigation.navigate('ResetPassword')
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
                  name="username"
                  placeholder="Pseudo"
                  control={control}
                  rules={{
                    required: "Veuillez entrer un pseudo",
                    minLength : {value: 3, message: "3 caractères minimum"},
                    maxLength : {value: 20, message: "20 caractères maximum"},
                    }}
                  />

              <CustomButton
                  text={"Envoyer"}
                  onPress={handleSubmit(onSubmit)}
                  />


              <CustomButton
                  text="Retour à la page de connexion"
                  onPress={onBackToSign}
                  type="SECOND"
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