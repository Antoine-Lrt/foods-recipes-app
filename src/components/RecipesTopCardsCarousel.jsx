import { StyleSheet, FlatList, View, SafeAreaView } from 'react-native'
import React from 'react'

// DATA //
import data from '../data/data.json'

// COMPONENTS //
import RecipesTopCard from '../components/RecipesTopCard'

const RecipesTopCardsCarousel = () => {

  const item = data

  

  const renderItem = ({item}) => (
    <RecipesTopCard 
        title={item.title}
        txtInfos={item.category}
        imageUrl={item.image}
    />
  )


  return (
  <View style={{height :'15%',}} >
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