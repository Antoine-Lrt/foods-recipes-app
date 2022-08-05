import React, { useState } from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import image from '../../../assets/images/background.jpg'




const SignUp = () => {

  const [code, setCode] = useState('')


  const onConfirmEmail = () =>{
    console.warn("Confirmer l'Email");
  }

  const onConnected = () =>{
    console.warn("Se conencter");
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
      
              <CustomInput 
                  placeholder={"Code de confirmation"}
                  value={code}
                  setValue={setCode} 
                  secureText={false}
                  />

              <CustomButton
                  text={"Confirmer"}
                  onPress={onConfirmEmail}
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

export default SignUp

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