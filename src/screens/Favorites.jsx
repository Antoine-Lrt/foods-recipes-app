import { FlatList, StyleSheet, Text, View, Image, Dimensions, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'



// DATA //
import data from '../data/data.json'

// COMPONENTS //
import RecipesFavoriteCard from '../components/RecipesFavoriteCard'
import CustomSearchBar from '../components/CustomSearchBar'
import CustomScreenHeader from '../components/CustomScreenHeader'


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

  const favdata = favorites
  

  const addRecipe = (list) => {
    const newFavorites = [...favorites, +list]
    setFavorites(newFavorites)
  }
  
 
  return (
    <SafeAreaView>

<CustomScreenHeader
        text1={"Mes"}
        text2={"Favoris"} 
      />

      <View style={{height: 200}}>

    <FlatList
          data={list}
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
          
      
      <View style={{height: 200}}>

      <FlatList
          data={favorites}
          keyExtractor={item => item.id}
          renderItem={({item}) =>(
            <RecipesFavoriteCard
            title={item.title}

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

        
        
          />
          )}
          ListEmptyComponent={<Text style={{fontSize: GLOBAL.TEXT.H3}}> Aucune recettes trouvées</Text>}
          numColumns={"2"}
          contentContainerStyle={{width: screenWidth, alignItems: 'center', paddingBottom:260}}
      />
      </View>

      </SafeAreaView>






  )
}

export default RecipesFavoritesList

const styles = StyleSheet.create({})