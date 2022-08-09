import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


// DATA //
import data from '../data/data.json'

// COMPONENTS //
import RecipesCard from './RecipesCard'


const RecipesCardsList = ({}) => {


    const item = data

    const screenWidth = Dimensions.get('window').width

    const navigation = useNavigation()


  return (

   <FlatList
        data={item}
        keyExtractor={item => item.id}
        renderItem={({item}) =>(
          <RecipesCard 
          title={item.title}
          category={item.category}
          level={item.level}
          imageUrl={item.image}
          onPressAction={() => 
            navigation.navigate('RecipesDetails', {
              itemInfo: item,

              //INGREDIENTS//
              itemIngredients: item.ingredients,
              itemIngredientsName: item.ingredients.map((ingredient)=>
                ingredient.name
              ),
              itemIngredientsQuantity: item.ingredients.map((ingredient)=>
                ingredient.quantity
              ),
              //STEP//
              itemStep: item.steps,
              itemStepIndex: item.steps.map((step) =>
                step.stepId
              ),
              itemStepDetails: item.steps.map((step) =>
                step.details
              ),

            })}
        />
        )}
        contentContainerStyle={{width: screenWidth, alignItems: 'center', paddingBottom:200}}
    />

  )
}

export default RecipesCardsList

const styles = StyleSheet.create({})