import { StyleSheet, Text, TouchableOpacity, Image, View, Dimensions } from 'react-native'
import React from 'react'

// CONSTANTS //
import GLOBAL from '../constants/GLOBAL'



const StepCard = ({stepIndex,stepText}) => {
  
  return (
    <View 
        style={styles.cardContainer}
    >
        <View style={styles.stepIndexCircle}>
            <Text style={styles.stepIndexTxt}> {stepIndex} </Text>
        </View>
        <Text style={styles.stepText}> {stepText} </Text>
    </View>
  )
}

export default StepCard

const styles = StyleSheet.create({
    cardContainer: { 
        width: 370,
        height: 100,
        flexDirection: 'row',
        alignItems:'center',
      },
      
      stepIndexCircle:{
        margin: 12,
        width: 30,
        height:30,
        borderRadius: 30,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: GLOBAL.COLOR.FIRSTCOLOR
    },

      stepIndexTxt:{
        color: GLOBAL.COLOR.WHITE
      },

      stepText:{
          flex: 1,flexWrap: 'wrap',
          fontSize: GLOBAL.TEXT.TEXT,
          fontFamily: GLOBAL.TEXT.FONTFAMILY,
          color: GLOBAL.COLOR.BLACK
      }






})