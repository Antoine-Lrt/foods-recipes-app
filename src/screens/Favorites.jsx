import { FlatList, StyleSheet, Text, View, Image, Dimensions, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'

import { connect } from 'react-redux'
import { fetchRecipes, addToFavorites, removeFromFavorites  } from '../redux/actions'
import { BASE_URL } from '../../utils/baseUrl';






// DATA //
import data from '../data/data.json'


// COMPONENTS //
import RecipesFavoriteCard from '../components/RecipesFavoriteCard'
import CustomButton from '../components/CustomButton'
import CustomScreenHeader from '../components/CustomScreenHeader'



// CONSTANTS //
import GLOBAL from '../constants/GLOBAL'




const RecipesFavoritesList = (props) => {

  // DIMENSION //
  const screenWidth = Dimensions.get('window').width

  // NAVIGATION //
  const navigation = useNavigation()



  const { recipeReducer} = props
  const { favList} = recipeReducer

  
 
  return (
    <SafeAreaView>

<CustomScreenHeader
        text1={"Mes"}
        text2={"Favoris"} 
      />


      <FlatList
          data={favList}
          keyExtractor={item => item.id}
          renderItem={({item}) =>(
          <View style={{alignItems: 'center'}}>

            <RecipesFavoriteCard
            title={item.title}
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
          <CustomButton
                width={170}
                height={40}
                text={'Suprimer des favoris'}
                fontWeight={'500'}
                fontSize={GLOBAL.TEXT.TEXT}
                onPress={() => onPressAddToFavorites(item)}
              /> 

            
          </View>
          )}
          ListEmptyComponent={<Text style={{fontSize: GLOBAL.TEXT.H3}}> Aucune recettes trouvées</Text>}
          numColumns={"2"}
          contentContainerStyle={{width: screenWidth, alignItems: 'center', paddingBottom:260}}
      />
 

      </SafeAreaView>






  )
}

const mapStateToProps = (state) => ({
  recipeReducer: state.recipeReducer
})

const FavScreen = connect(mapStateToProps, { fetchRecipes, addToFavorites, removeFromFavorites })(RecipesFavoritesList)

export default FavScreen

const styles = StyleSheet.create({})