import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'react-native'
// import data from '../../data/data.json'

// COMPONENTS //
import IngredientsCard from '../../components/IngredientsCard'

// CONSTANTS //
import GLOBAL from '../../constants/GLOBAL'
import PreparationCard from '../../components/PreparationCard'

const RecipesDetails = () => {
    const image = 'https://www.grillseeker.com/wp-content/uploads/2017/11/Butter-Burgers_f.jpg'
  return (
    <View style={styles.recipesDetailsContainer}>
      <StatusBar barStyle={'light-content'} />
        <ImageBackground 
          source={{uri: image}} 
          resizeMode="cover" 
          style={styles.cardImageContainer} 
          >
            <LinearGradient
                    colors={['transparent','rgba(0,0,0,1)']}
                    style={styles.gradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: .8 }}
             />
            <View style={styles.cardImageText}>
              <Text style={styles.cardImageTitle}>BURGER</Text>
            </View>
        </ImageBackground>
        <ScrollView style={styles.recipesInfosContainer}>
          <View style={styles.recipesInfos}>
              <Text style={styles.recipesInfosTxt}>Temps : 50 mins </Text>
              <Text style={styles.recipesInfosTxt}>Difficulté: Facile </Text>
          </View>
           
           {/* INGREDIENTS  */}
              <Text style={styles.recipesDetailsTitle}>Ingrédients</Text>
            <View style={{alignItems: 'center'}}>
              <IngredientsCard 
                name={'Buns'}
                quantity={2}
              />
              <IngredientsCard 
                name={'Steack Hachés'}
                quantity={2}
              />
              <IngredientsCard 
                name={'Oignons'}
                quantity={'2'}
              />
              <IngredientsCard 
                name={'Cheddar'}
                quantity={'2 tranches'}
              />
              <IngredientsCard 
                name={'Bacon'}
                quantity={'6 tranches'}
              />
              <IngredientsCard 
                name={'Sauce barbecue'}
              />

            </View> 
            {/* RECIPES  */}
            <Text style={styles.recipesDetailsTitle}>Préparation</Text>
              <View style={{alignItems: 'center'}}>
                <PreparationCard 
                 
                />
                

              </View>
        </ScrollView>

    </View>
  )
}

export default RecipesDetails

const styles = StyleSheet.create({

  // IMAGE HEADER //

    recipesDetailsContainer:{
    flex:1
  },

  cardImageContainer: {
    height: 350,
    padding: 1,
    justifyContent: 'flex-end',
    backgroundColor:'black'
  },

  gradient:{
    position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 250,
  },

  cardImageText:{},

  cardImageTitle: {
    color:GLOBAL.COLOR.WHITE,
    fontSize: 50,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },

  // RECIPES DETAILS

  recipesInfosContainer:{
  },
  
  recipesInfos:{
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  
  recipesInfosTxt: {
    color:GLOBAL.COLOR.BLACK,
    fontSize: GLOBAL.TEXT.TEXT,
    textTransform: 'uppercase',
    fontFamily: GLOBAL.TEXT.FONTFAMILY,
    fontWeight: '500',
  },

  // INGREDIENTS //

  recipesDetailsTitle:{
    fontSize: GLOBAL.TEXT.H2,
    fontFamily: GLOBAL.TEXT.FONTFAMILY,
    padding: 15
  },
})