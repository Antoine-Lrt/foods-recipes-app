import { StyleSheet, Text, TouchableOpacity, ImageBackground, View, Dimensions } from 'react-native'
import React, {useContext} from 'react'

// COMPONANTS //
import CustomButton from '../components/CustomButton'

// CONSTANTS //
import GLOBAL from '../constants/GLOBAL'


const RecipesCard = ({title, category, level, imageUrl, onPressAction, ingredients, step}) => {

  
  return (
 

    <View style={{alignItems: 'center'}}>

      <TouchableOpacity 
      onPress={onPressAction}
  >
            <ImageBackground source={{uri: imageUrl}} resizeMode='cover' style={styles.cardContainer} imageStyle={{borderRadius: 12, opacity: .6}}>
                  <View style={styles.cardTextContainer}>
                      <Text style={styles.cardTitle}>{title}</Text>
                      <Text style={styles.cardInfosLevel}>{level}</Text>
                  </View>
            </ImageBackground> 
        </TouchableOpacity>
       
    </View>
  )
}

export default RecipesCard

const styles = StyleSheet.create({


    cardContainer: { 
      margin: 9,
      width: 170,
      height: 200,
      marginHorizontal: 9,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: GLOBAL.COLOR.BLACK,
      borderRadius: 12,
      shadowColor: 'black',
      shadowOffset: {width:0, height: 3},
      shadowOpacity: .3,
      shadowRadius:5,

    },



    cardTextContainer:{
      flexDirection: 'column',
      padding: 10,
      alignItems: 'center'

    },
     
    cardTitle: {
      fontSize: GLOBAL.TEXT.TEXT,
      color: GLOBAL.COLOR.WHITE,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontFamily: GLOBAL.TEXT.FONTFAMILY
    },
    
    cardInfosCategory:{
      fontSize: GLOBAL.TEXT.TEXT,
      color: GLOBAL.COLOR.WHITE,
      fontFamily: GLOBAL.TEXT.FONTFAMILY,
    },

    cardInfosLevel:{
      fontSize: GLOBAL.TEXT.TEXT,
      color: GLOBAL.COLOR.WHITE,
      fontFamily: GLOBAL.TEXT.FONTFAMILY,

    }



})