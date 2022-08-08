import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// COMPONENTS //
import CustomSearchBar from '../../components/CustomSearchBar'
import RecipesTopCardsCarousel from '../../components/RecipesTopCardsCarousel'
import RecipesCard from '../../components/RecipesCard'
import RecipesCardsList from '../../components/RecipesCardsList'

const Recipes = () => {
  return (
    <SafeAreaView style={{alignItems: 'center',}}>
      {/* <Text style>Recipes  METTRE LA NAVIGATION RECIPES DETAILS ICI ET PAS DANS APP</Text> */}
      <CustomSearchBar />
      <RecipesTopCardsCarousel />
      <RecipesCardsList />
    </SafeAreaView>
  )
}

export default Recipes

const styles = StyleSheet.create({})