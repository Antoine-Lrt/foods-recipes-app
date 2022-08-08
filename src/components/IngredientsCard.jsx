import { StyleSheet, Text, TouchableOpacity, Image, View, Dimensions } from 'react-native'
import React from 'react'

// CONSTANTS //
import GLOBAL from '../constants/GLOBAL'

const IngredientsCard = ({name, quantity}) => {
  
  return (
    <View 
        style={styles.cardContainer}
    >
              <Text style={styles.ingredientsName}>{name}</Text>
              <Text style={styles.ingredientsQuantity}>{quantity}</Text>
    </View>
  )
}

export default IngredientsCard

const styles = StyleSheet.create({
    cardContainer: { 
        marginTop: 10,
        padding : 20,
        width: 370,
        height: 70,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent: 'space-between',
        borderRadius:12,
        shadowColor: 'black',
        shadowOffset: {width:0, height: 3},
        shadowOpacity: .1,
        shadowRadius:5,
      },
      
      ingredientsName: {
        fontSize: GLOBAL.TEXT.TEXT,
        fontWeight: 'bold',
      },

      ingredientsQuantity:{
        color: GLOBAL.COLOR.FIRSTGREEN,
        fontWeight: 'bold',
      }
      





})