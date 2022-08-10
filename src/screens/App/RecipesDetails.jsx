import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft ,faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'

// COMPONENTS //
import IngredientsCard from '../../components/IngredientsCard'
import RecipesInfosTag from '../../components/RecipesInfosTag'
import StepCard from '../../components/StepCard'

// CONSTANTS //
import GLOBAL, { COLOR } from '../../constants/GLOBAL'




const RecipesDetails = ({}) => {

 

  const route = useRoute()

  const navigation = useNavigation()

  const {itemInfo,itemIngredients,itemIngredientsQuantity,itemIngredientsName,itemStep,itemStepIndex,itemStepDetails} = route.params
   console.log(itemIngredients);

  
 

  // CHANGE ICON COLOR WHEN ADD TO FAVORITES

  const [colorIcon, setColorIcon] = useState(GLOBAL.COLOR.WHITE)

  const changeIconColor = (colorIcon) => {
    setColorIcon(colorIcon)
  }
  
  const addToFavorite = () => {
    if(colorIcon == GLOBAL.COLOR.WHITE) {
      changeIconColor(GLOBAL.COLOR.FIRSTGREEN);
      console.warn('Add favorites')
    }
   else {
     changeIconColor(GLOBAL.COLOR.WHITE)
     console.warn('Delete favorites')
   }

  }
  


  return (
    <View style={styles.recipesDetailsContainer}>
      <StatusBar barStyle={'light-content'} />
        <ImageBackground 
          source={{uri: route.params.itemInfo.image}} 
          resizeMode="cover" 
          style={styles.cardImageContainer} 
          >
          <View style={{ marginTop: 40, padding: 15, flexDirection:'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{width:30,}} onPress={() => navigation.goBack()}>
            <FontAwesomeIcon 
                      icon={faArrowLeft} 
                      size={30}
                      style={{
                        color: GLOBAL.COLOR.WHITE,
                        alignItems: 'center'
                      }}                      
                      />
          </TouchableOpacity>
          <TouchableOpacity style={{width:30,}} onPress={addToFavorite}>
            <FontAwesomeIcon 
                      icon={faHeart} 
                      size={30}
                      style={{
                        color: colorIcon,
                        alignItems: 'center'
                      }}                      
                      />
          </TouchableOpacity>
          </View>
            <LinearGradient
                    colors={['transparent','rgba(0,0,0,1)']}
                    style={styles.gradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: .8 }}
             />
            <View style={styles.cardImageText}>
              <Text style={styles.cardImageTitle}>{route.params.itemInfo.title}</Text>
            </View>
        </ImageBackground>
        <ScrollView style={styles.recipesInfosContainer}>
          <View style={styles.recipesInfos}>
            <RecipesInfosTag 
                details={"Catégorie"}
                text={route.params.itemInfo.category}
            />
            <RecipesInfosTag 
                details={"Difficulté"}
                text={route.params.itemInfo.level}
            />
            <RecipesInfosTag 
                details={"Temps"}
                text={route.params.itemInfo.time}
                time={"min"}
                
            />
            <RecipesInfosTag 
                details={"Parts"}
                text={route.params.itemInfo.part}

            />
          </View>
           
           {/* INGREDIENTS  */}
              <Text style={styles.recipesDetailsTitle}>Ingrédients</Text>
                <View style={{alignItems: 'center'}}>
                 {/* // ... && ...map : check we have data to display */}
                    {itemIngredients && itemIngredients.map((currIng, index) => (
                     <IngredientsCard 
                        name={itemIngredientsName[+index]}
                        quantity={itemIngredientsQuantity[+index]}
                    />

                    ))}
                      
                </View> 
            {/* RECIPES  */}
            <Text style={styles.recipesDetailsTitle}>Préparation</Text>
              <View style={{alignItems: 'center',}}>
                  <View  style={styles.stepCardContainer}>
                  {/* // ... && ...map : check we have data to display */}
                  {itemStep && itemStep.map((currIng, index) => (
                        <StepCard
                            stepIndex={itemStepIndex[+index]}
                            stepText={itemStepDetails[+index]}
                        />
                        ))}

                  </View>
                    
               
               
              
                

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
    justifyContent: 'space-between',
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
    fontSize: 45,
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

 


  // INGREDIENTS //

  recipesDetailsTitle:{
    fontSize: GLOBAL.TEXT.H2,
    fontFamily: GLOBAL.TEXT.FONTFAMILY,
    padding: 15
  },

  // STEP //

  stepCardContainer:{
    padding : 10,
    width: 370,
    backgroundColor: 'white',
    alignItems:'center',
    borderRadius:12,
    shadowColor: 'black',
    shadowOffset: {width:0, height: 3},
    shadowOpacity: .3,
    shadowRadius:5,
    marginBottom: 30
  }
})