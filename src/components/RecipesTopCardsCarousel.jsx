import { StyleSheet, FlatList, View, SafeAreaView } from 'react-native'
import React from 'react'

// DATA //
import data from '../data/category.json'

// COMPONENTS //
import RecipesTopCard from '../components/RecipesTopCard'

const RecipesTopCardsCarousel = () => {

 const item = data

  

  const renderItem = ({item}) => (
    <RecipesTopCard 
        imageUrl={item.categoryImage}
        txtInfos={item.categoryName}
    />
  )


  return (
  <View style={{height :'20%'}} >
   <FlatList
          data={item}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          pagingEnabled
          horizontal 
          showsHorizontalScrollIndicator={false} 
          snapToInterval={1}
          decelerationRate="fast"
          contentContainerStyle={{alignItems:'center', justifyContent: 'center'}}  
    />    
    </View>
  )
}

export default RecipesTopCardsCarousel

const styles = StyleSheet.create({})