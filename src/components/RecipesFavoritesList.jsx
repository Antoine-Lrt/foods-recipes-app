import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'



// DATA //
import data from '../data/data.json'

// COMPONENTS //
import RecipesFavoriteCard from './RecipesFavoriteCard'
import CustomSearchBar from './CustomSearchBar'


// CONSTANTS //
import GLOBAL from '../constants/GLOBAL'



const RecipesFavoritesList = () => {



 




  // DIMENSION //
  const screenWidth = Dimensions.get('window').width

  // NAVIGATION //
  const navigation = useNavigation()


  // state
  const [list, setList] = useState(data)
  const [favorites, setFavorites]=useState([])
  

  const addRecipe = (list) => {
    const newFavorites = [...favorites, list]
    setFavorites(newFavorites)
  }
  
 
  return (
    <View>

<CustomScreenHeader
        text1={"Mes"}
        text2={"Favoris"} 
      />
          
    <FlatList
          data={favorites}
          keyExtractor={item => item.id}
          renderItem={({item}) =>(
            <RecipesFavoriteCard
            title={item.title}
            level={item.level}
            imageUrl={item.image}
            // onPressAction={() => 
            //   navigation.navigate('RecipesDetails', {
            //     itemInfo: item,

            //     //INGREDIENTS//
            //     itemIngredients: item.ingredients,
            //     itemIngredientsName: item.ingredients.map((ingredient)=>
            //       ingredient.name
            //     ),
            //     itemIngredientsQuantity: item.ingredients.map((ingredient)=>
            //       ingredient.quantity
            //     ),
            //     //STEP//
            //     itemStep: item.steps,
            //     itemStepIndex: item.steps.map((step) =>
            //       step.stepId
            //     ),
            //     itemStepDetails: item.steps.map((step) =>
            //       step.details
            //     ),

            //   })}

            onPressAction={(addRecipe)}
          />
          )}
          ListEmptyComponent={<Text style={{fontSize: GLOBAL.TEXT.H3}}> Aucune recettes trouvées</Text>}
          numColumns={"2"}
          contentContainerStyle={{width: screenWidth, alignItems: 'center', paddingBottom:260}}
      />
    </View>

  )
}

export default RecipesFavoritesList

const styles = StyleSheet.create({})