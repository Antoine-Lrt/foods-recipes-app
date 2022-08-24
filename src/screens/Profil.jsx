import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


// NAVIGATION //
import { useNavigation } from '@react-navigation/native'

// FIREBASE //
import { useAuth } from '../contexts/AuthContext'

// COMPONANTS //
import CustomScreenHeader from '../components/CustomScreenHeader'
import CustomButton from '../components/CustomButton'

// CONSTANTS //
import GLOBAL from '../constants/GLOBAL'


const Profil = () => {

  const navigation = useNavigation()

  const {currentUser} = useAuth()

  const {isSignOut, deleteUsers, reauthenticateWithCredential} = useAuth()

  const onSigneOut= () =>{
    isSignOut()
    navigation.navigate('SignIn')
  }

  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
      console.log('AsyncStorage Cleared');
    }catch(err) {
      console.log(err);
    }
  }

  const onDeleteUser = () => {
    reauthenticateWithCredential()
    deleteUsers()
    navigation.navigate('SignIn')
    clearAll()
    
  }




  return (
    <SafeAreaView style={{alignItems: 'center'}}>
        <CustomScreenHeader
          text1={"Mon"} 
          text2={"Profil"}
          />
        <>
     
        {/* <CustomButton
        text="Ajouter une recette"
        onPress={''}
        type="FIRST"
      /> */}

        <CustomButton
        text="Se déconnecter"
        onPress={onSigneOut}
        type="SECOND"
        width={350}
        height={50}
        fontWeight={'500'}
        fontSize={GLOBAL.TEXT.TEXT}
      />


        <CustomButton
        text="Supprimer mon compte"
        onPress={onDeleteUser}
        type="SECOND"
        width={350}
        height={50}
        fontWeight={'500'}
        fontSize={GLOBAL.TEXT.TEXT}
      />  
        </>
    </SafeAreaView>
  )
}

export default Profil

const styles = StyleSheet.create({})