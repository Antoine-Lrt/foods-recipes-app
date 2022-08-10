import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

// COMPONENTS //

import CustomScreenHeader from '../../components/CustomScreenHeader'
import RecipesFavoritesList from '../../components/RecipesFavoritesList'
const Favorites = () => {
  return (
    <SafeAreaView style={{alignItems: 'center', justifyContent: 'space-between',}}>
      <StatusBar barStyle={'dark-content'} />
      <CustomScreenHeader
        text1={"Mes"}
        text2={"Favoris"} 
      />
      <RecipesFavoritesList />
    </SafeAreaView>
  )
}

export default Favorites

const styles = StyleSheet.create({})