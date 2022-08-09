import { StyleSheet, Text, TouchableOpacity, Image, View, Dimensions } from 'react-native'
import React from 'react'

// CONSTANTS //
import GLOBAL from '../constants/GLOBAL'

const RecipesCard = ({title, category, level, imageUrl, onPressAction, ingredients, step}) => {
  
  return (
    <TouchableOpacity 
        style={styles.cardContainer}
        onPress={onPressAction}
    >
          <View style={styles.cardImgContainer}>
              <Image source={{uri: imageUrl}} style={styles.cardImg} />
          </View>
          <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>{title}</Text>
              <Text style={styles.cardInfosCategory}>{category}</Text>
              <Text style={styles.cardInfosLevel}>{level}</Text>
          </View>
    </TouchableOpacity>
  )
}

export default RecipesCard

const styles = StyleSheet.create({
    cardContainer: { 
        marginTop: 10,
        width: 350,
        height: 100,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems:'center',
        borderRadius:12,
        shadowColor: 'black',
        shadowOffset: {width:0, height: 3},
        shadowOpacity: .3,
        shadowRadius:5,
      },

      cardImgContainer:{},

      cardImg: {
        borderRadius: 100,
        height: 70,
        width: 70,
        margin: 15
      },

      cardImgContainer:{
        color: GLOBAL.COLOR.BLACK,

      },
       
      cardTitle: {
        fontSize: GLOBAL.TEXT.H3,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: GLOBAL.TEXT.FONTFAMILY
      },
      
      cardInfosCategory:{
        fontSize: GLOBAL.TEXT.TEXT
      },

      cardInfosLevel:{
        fontSize: GLOBAL.TEXT.TEXT,
        fontStyle: 'italic'
      }





})