import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'


// NAVIGATION //
import { useNavigation } from '@react-navigation/native'

// FIREBASE //
import { useAuth } from '../../contexts/AuthContext'

// COMPONANTS //
import CustomScreenHeader from '../../components/CustomScreenHeader'
import CustomButton from '../../components/CustomButton'


const Profil = () => {

  const navigation = useNavigation()

  const {currentUser} = useAuth()

  const {isSignOut} = useAuth()

  const onSigneOut= () =>{
    isSignOut()
    navigation.navigate('SignIn')
  }

  return (
    <SafeAreaView>
        <CustomButton
        text="Se déconnecter"
        onPress={onSigneOut}
        type="SECOND"
      />
        <CustomScreenHeader
          text1={"Mon"} 
          text2={"Profil"}
          />
        <>
        <Text> Profil Image </Text>
        <Text>{JSON.stringify(currentUser, null, )}</Text>
        <Text> Mes favoris</Text>

        </>
    </SafeAreaView>
  )
}

export default Profil

const styles = StyleSheet.create({})