import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const SignIn = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSignPressed = () =>{
    console.warn('Connecté');
  }

  const onForgotPassword = () =>{
    console.warn('Créer un nouveau mot de passe');
  }

  const onSignFacebook = () =>{
    console.warn('Connecté avec Facebook');
  }

  const onSignGoogle = () =>{
    console.warn('Connecté avec Google');
  }

  const onSignApple = () =>{
    console.warn('Connecté avec Apple');
  }

  const onCreateAccount = () =>{
    console.warn('Creer un compte');
  }

  onCreateAccount



  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.signinContainer}>
      <Text style={{fontSize:50, height:200, textAlign: 'center'}}>LOGO</Text>
      <CustomInput 
          placeholder={"Email"}
          value={username}
          setValue={setUsername} 
          secureText={false}
          />
      <CustomInput 
          placeholder={"Mot de passe"}
          value={password}
          setValue={setPassword}
          secureText={true}
          />
        <CustomButton
          text={"Se Connecter"}
          onPress={onSignPressed}
          />
        
        <CustomButton
          text={"Mot de passe oublié"}
          type={"SECOND"}
          onPress={onForgotPassword}
          />

        <CustomButton
          text={"Se connecter avec Facebook"}
          onPress={onSignFacebook}
          bgColor="#c0c8e2"
          txtColor="#4765A9"
          />
        
        <CustomButton
          text={"Se connecter avec Google"}
          onPress={onSignGoogle}
          bgColor="#fda5a5"
          txtColor="#DD4D44"
          />
        
        <CustomButton
          text={"Se connecter avec Apple"}
          onPress={onSignApple}
          bgColor="#cfcfcf"
          txtColor="#363636"
          />

        <CustomButton
          text={'Créer un compte'}
          onPress={onCreateAccount}
          type={'SECOND'}

          />
    </View>

  // </ScrollView>
    
  )
}

export default SignIn

const styles = StyleSheet.create({
  signinContainer:{
      width:'100%',
      padding: 15,
      marginVertical: 5,
      alignItems:'center',
      borderRadius: 5,
      backgroundColor:'#e8E8E8'
  }
})