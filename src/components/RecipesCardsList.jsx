import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'


// DATA //
import data from '../data/data.json'

// COMPONENTS //
import RecipesCard from './RecipesCard'

const RecipesCardsList = () => {


    const item = data

    const screenWidth = Dimensions.get('window').width

    
    const renderItem = ({item}) => (
        <RecipesCard 
          title={item.title}
          txtInfos={item.category}
          imageUrl={item.image}
        />
) 

  return (

   <FlatList
        data={item}
        keyExtractor={item => item.key}
        renderItem={renderItem}
        contentContainerStyle={{width: screenWidth, alignItems: 'center', paddingBottom:200}}
    />

  )
}

export default RecipesCardsList

const styles = StyleSheet.create({})