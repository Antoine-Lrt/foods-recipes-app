import React, { useState } from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import image from '../../../assets/images/background.jpg'




const SignUp = () => {

  const [code, setCode] = useState('')
  const [newPassword, setNewPassword] = useState('')



  const onSubmit = () =>{
    console.warn("Envoyer");
  }

  const onBackToSign = () =>{
    console.warn("onBackToSign");
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
      
              <CustomInput 
                  placeholder={"Code de confirmation"}
                  value={code}
                  setValue={setCode} 
                  secureText={false}
                />

              <CustomInput 
                  placeholder={"Entrer votre nouveau mot de passe"}
                  value={newPassword}
                  setValue={setNewPassword} 
                  secureText={false}
                />

              <CustomButton
                  text={"Envoyer"}
                  onPress={onSubmit}
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

export default SignUp

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