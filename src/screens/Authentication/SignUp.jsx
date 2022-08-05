import React, { useState } from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import image from '../../../assets/images/background.jpg'
import SocialSignInButton from '../../components/SocialSignInButton'



const SignUp = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const onSignPressed = () =>{
    console.warn("Connecté");
  }

  const onForgotPassword = () =>{
    console.warn("Créer un nouveau mot de passe");
  }

  const onSigneIn= () =>{
    console.warn("Se conecter");
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
                <Text style={styles.text}> Créer un compte</Text>
              </View>
              <CustomInput 
                  placeholder={"Pseudo"}
                  value={username}
                  setValue={setUsername} 
                  secureText={false}
                  />
              <CustomInput 
                  placeholder={"Email"}
                  value={email}
                  setValue={setEmail} 
                  secureText={false}
                  />
              <CustomInput 
                  placeholder={"Mot de passe"}
                  value={password}
                  setValue={setPassword}
                  secureText={true}
                  />
              <CustomInput 
                  placeholder={"Confirmer le mot de passe"}
                  value={passwordConfirm}
                  setValue={setPasswordConfirm}
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

                <SocialSignInButton />

                <CustomButton
                  text={'Déja un compte ? Se connecter'}
                  onPress={onSigneIn}
                  type={'SECOND'}

                  />
                <Text style={styles.textConditions}>
                  En vous inscrivant, vous acceptez les <Text style={styles.textConditionsLink} onPress={onTermOfUser}>Conditions d'Utilisation</Text> et la <Text style={styles.textConditionsLink} onPress={onPrivacyPolicy}>Politique de Confidentialité</Text>, incluant l'<Text style={styles.textConditionsLink} onPress={onCookiesUtilisationst}>Utilisation de Cookies.</Text>
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
    justifyContent: "center",
    alignItems: 'center'
  },

  textContainer:{
    padding:20
  },

  text: {
    color: "black",
    fontSize: 30,
    fontFamily: 'Futura',
    fontWeight: '700' ,
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