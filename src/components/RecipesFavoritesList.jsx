import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'



// DATA //
import data from '../data/fav.json'

// COMPONENTS //
import RecipesFavoriteCard from './RecipesFavoriteCard'
import CustomSearchBar from './CustomSearchBar'
import RecipesTopCardsCarousel from './RecipesTopCardsCarousel'





const RecipesFavoritesList = ({}) => {


  // DIMENSION //
  const screenWidth = Dimensions.get('window').width

  // NAVIFGATION //

  const navigation = useNavigation()

  // STATE //
  // list state 
  let [list, setList] = useState(data)
  // search state 
  const [search, setSearch] = useState('')
  // filter state
  const [updated, setUpdates] = useState(data)
  
  const searchRecipe = (text) => {
    // changeText
    if (text) {
      const newData = list.filter(item => {
        const listItem = `${item.title.toLocaleLowerCase()} ${item.category.toLocaleLowerCase()} ${item.level.toLocaleLowerCase()}`
        return listItem.indexOf(text.toLocaleLowerCase()) > -1
      })  
      setUpdates(newData)
    }  
  }  
  return (
    <View>
   
    <CustomSearchBar
        placeholder={"Recherche"}
        value={search}
        onChangeText={(text) => {
          searchRecipe(text)
          setSearch(text)
        }} 
        />
        
    <FlatList
          data={updated}
          keyExtractor={item => item.id}
          renderItem={({item}) =>(
            <RecipesFavoriteCard
            title={item.title}
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
          numColumns={"2"}
          contentContainerStyle={{width: screenWidth, alignItems: 'center', paddingBottom:260}}
      />
    </View>

  )
}

export default RecipesFavoritesList

const styles = StyleSheet.create({})