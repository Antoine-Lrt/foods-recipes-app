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





const ResetPassword = () => {

  const {control, handleSubmit} = useForm()
  const [newPassword, setNewPassword] = useState('')

  const navigation = useNavigation()


  const onSubmit = (data) =>{
    console.warn(data)
    navigation.navigate('SignIn')
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
                  placeholder="Entrer le code de confirmation"
                  name="confirm-code"
                  control={control}
                  rules={{
                    required: "Veuillez entrer votre code de confirmation",
                  }}
                  isShowIcon= {true}
                  />

              <CustomInputPassword 
                  placeholder={"Entrer votre nouveau mot de passe"}
                  name="newPassword"
                  control={control}
                  secureTextEntry
                  rules={{
                    required: "Veuillez entrer un mot de passe",
                    minLength : {value: 8, message: "8 caractères minimum"},
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

export default ResetPassword

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