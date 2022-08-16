import { SafeAreaView, StyleSheet, StatusBar,View,Text,Dimensions} from 'react-native'
import React, {useEffect, useState} from 'react'


// DIMENSION //
const screenWidth = Dimensions.get('window').width


// COMPONENTS //
import RecipesCardsList from '../../components/RecipesCardsList'
import CustomScreenHeader from '../../components/CustomScreenHeader'

// FIREBASE //
import { useAuth } from '../../contexts/AuthContext'








const Recipes = () => {

  const {currentUser} = useAuth()

  console.log(currentUser);



  return (
    <SafeAreaView style={{alignItems: 'center', justifyContent: 'space-between',}}>
      <StatusBar barStyle={'dark-content'} />
          <CustomScreenHeader
            text1={"Bonjour"}
            text2={currentUser.displayName}
          />
      <RecipesCardsList />    
    </SafeAreaView>
  )
}

export default Recipes

const styles = StyleSheet.create({

})