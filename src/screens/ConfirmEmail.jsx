import React, { useState } from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'

// NAVIGATION //
import { useNavigation } from '@react-navigation/native'

// HOOKS //
import {useForm} from 'react-hook-form'

// COMPONENTS //
import CustomButton from '../components/CustomButton'
import CustomInputText from '../components/CustomInputText';
import CustomInputPassword from '../components/CustomInputPassword';

// IMAGES //
import image from '../../assets/images/background.jpg'




const ConfirmEmail = () => {

  const {control, handleSubmit} = useForm()

  const navigation = useNavigation()


  const onConfirmEmail = (data) =>{
    console.warn(data)
    navigation.navigate('Home')
  }

  const onConnected = () =>{
    navigation.navigate('SignIn')
  }

  const onResendCode = () =>{
    console.warn("Renvoyer le code");
  }
  onResendCode


  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground 
          source={image} 
          resizeMode="cover" 
          imageStyle={{opacity:.05}}
          style={styles.imageBackground}
          >
          <SafeAreaView style={styles.confirmEmailContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Confirmer votre Email</Text>
              </View>
      
              <CustomInputText 
                  placeholder="Entrer le code de confirmation"
                  name="confirm-code"
                  control={control}
                  rules={{
                    required: "Veuillez entrer votre code de confirmation",
                  }}
                  />

              <CustomButton
                  text={"Confirmer"}
                  onPress={handleSubmit(onConfirmEmail)}
                  />

              <CustomButton
                  text={"Renvoyer le code"}
                  onPress={onResendCode}
                  type="TERTIARY"
                  />

              <CustomButton
                  text="Se connecter"
                  onPress={onConnected}
                  type="SECOND"
      />
                
        </SafeAreaView>
      </ImageBackground>

  // </ScrollView>
    
  )
}

export default ConfirmEmail

const styles = StyleSheet.create({
  confirmEmailContainer:{
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
    fontSize: 25,
    fontFamily: 'Futura',
    fontWeight: '700' ,
    alignItems:'center'
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