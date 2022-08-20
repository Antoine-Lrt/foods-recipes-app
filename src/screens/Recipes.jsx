import { FlatList, StyleSheet, Text, View, SafeAreaView, Dimensions, ActivityIndicator, StatusBar } from 'react-native'
import React, {useEffect, useMemo, useState} from 'react'
import { useNavigation } from '@react-navigation/native'



// DATA //
import data from '../data/data.json'
import dataList from '../data/category.json'

// FIREBASE //
import { db } from '../../utils/firebase-config';
import { collection, doc, getDocs } from 'firebase/firestore'
import { useAuth } from '../contexts/AuthContext'

// CONSTANTS //

import GLOBAL from '../constants/GLOBAL'

// COMPONENTS //
import RecipesCard from '../components/RecipesCard'
import CustomScreenHeader from '../components/CustomScreenHeader'
// import CustomSearchBar from './CustomSearchBar'
import RecipesTopCard from '../components/RecipesTopCard'
// import { Button } from 'react-native-elements';
// import { faExpeditedssl } from '@fortawesome/free-brands-svg-icons'
// import { async } from '@firebase/util'




const Recipes = ({}) => {

  // DIMENSION //
  const screenWidth = Dimensions.get('window').width

  // NAVIFGATION //

  const navigation = useNavigation()

  // STATE //

  // list state 
  let [list, setList] = useState(recipes)
  // search state 
  const [search, setSearch] = useState('')
  // category state
  const [category, setCategory]= useState('Toutes les recettes')
  // filter state
  const [updated, setUpdates] = useState(recipes)
  //  loading 
  const [loading, setLoading] = useState(true);
  // recipes
  const [recipes, setRecipes] = useState([])
  // category
  const [categories, setCategories] = useState([])



  // FETCH DATA //

  // Recipes //
  const getRecipes = async () => {
    let result = [];
    const snapshot = await getDocs(collection(db, "recipes"));
    snapshot.forEach((doc) => {
      result.push(doc.data());
    });

    setRecipes([...result]);

  }
  useEffect(() => {
    getRecipes();
  }, [])

  // Category // 
  const getCategory = async () => {
    let result = [];
    const snapshot = await getDocs(collection(db, "category"));
    snapshot.forEach((doc) => {
      result.push(doc.data());
    });

    setCategories([...result]);

  }
  useEffect(() => {
    getCategory();
  }, [])



  const renderLoader = () => {
    return loading ? (
      <ActivityIndicator />
    ) : null
  }



  // SEARCHBAR //
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

  // RECIPES TOP CARD CAROUSEL //

  // const item = dataList

  // const renderItem = ({item}) => (
  //   <RecipesTopCard 
  //       imageUrl={item.categoryImage}
  //       txtInfos={item.categoryName}
        
  //   />
  // )

  // BUTTON FILTER //
  
  // Keep a category of the current selected category //

  const filteredList = useMemo(
    () => {
      if (category === 'Toutes les recettes') return recipes
      return recipes.filter(item => category === item.category)
    },
    [category, recipes]
  )

  const onClick = (category) => () => {
    setCategory(category)
  }


  const {currentUser} = useAuth()

  return (
    <SafeAreaView style={{}}>
      <StatusBar barStyle={'dark-content'} />
    <CustomScreenHeader
            text1={"Bonjour"}
            text2={currentUser.displayName}
          />
    {/* <CustomSearchBar
        placeholder={"search"}
        value={search}
        onChangeText={(text) => {
          searchRecipe(text)
          setCategory(text)
        }} 

        /> */}
     <View style={{height:"20%", alignItems: 'flex-start'}} >

    <FlatList
          data={categories}
          renderItem={({item}) => (
            <RecipesTopCard 
              imageUrl={item.categoryImage}
              txtInfos={item.categoryName}
              onPress={onClick(item.categoryName)}
            />
          )}
          keyExtractor={(item) => item.title}
          pagingEnabled
          horizontal 
          showsHorizontalScrollIndicator={false} 
          snapToInterval={1}
          decelerationRate="fast"
          contentContainerStyle={{alignItems:'center', justifyContent: 'center', }}  
    />    




     </View>   
    
<View style={{ height:"70%",  alignContent: 'flex-start'}} >

    <FlatList
        
          data={filteredList}
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
          numColumns={"2"}
          ListEmptyComponent={<Text style={{fontSize: GLOBAL.TEXT.H3}}> Aucune recettes trouvées</Text>}
          contentContainerStyle={{width: screenWidth, alignItems: 'center', paddingBottom:110}}
      />
</View>
    </SafeAreaView>

  )
}

export default Recipes

const styles = StyleSheet.create({})