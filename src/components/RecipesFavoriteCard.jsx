import { StyleSheet, Text, TouchableOpacity, View, Dimensions, ImageBackground } from 'react-native'
import React from 'react'

// CONSTANTS //
import GLOBAL from '../constants/GLOBAL'


// DIMENSION //
const screenWidth = Dimensions.get('window').width

const RecipesFavoriteCard = ({title, level, imageUrl, onPressAction}) => {
  
  return (
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
  )
}

export default RecipesFavoriteCard

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