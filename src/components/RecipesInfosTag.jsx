import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// COSNTANTS //
import GLOBAL from '../constants/GLOBAL'

const RecipesInfosTag = ({text, details, time }) => {
  return (
   
      <Text style={styles.tagTxt}>{details}:{text} {time}</Text>
  
  )
}

export default RecipesInfosTag

const styles = StyleSheet.create({
   

    tagTxt:{
        color:GLOBAL.COLOR.FIRSTCOLOR,
        fontSize: GLOBAL.TEXT.SMALL_TEXT,
        textTransform: 'uppercase',
        fontFamily: GLOBAL.TEXT.FONTFAMILY,
        fontWeight: '500',
    
    },

})