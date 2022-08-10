import { SafeAreaView, StyleSheet, Text, View } from 'react-native'


// COMPONENTS //

import RecipesCardsList from '../../components/RecipesCardsList'



const Recipes = () => {

  return (
    <SafeAreaView style={{alignItems: 'center',}}>
      <RecipesCardsList />
    </SafeAreaView>
  )
}

export default Recipes

const styles = StyleSheet.create({})