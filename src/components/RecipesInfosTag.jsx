import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// COSNTANTS //
import GLOBAL from '../constants/GLOBAL'

const RecipesDetailsTag = ({text, details, time }) => {
  return (
    
      <Text style={styles.tagTxt}>{details} : {text} {time}</Text>
  
  )
}

export default RecipesDetailsTag

const styles = StyleSheet.create({
   

    tagTxt:{
        margin: 2,
        color:GLOBAL.COLOR.FIRSTCOLOR,
        fontSize: GLOBAL.TEXT.SMALL_TEXT,
        textTransform: 'uppercase',
        fontFamily: GLOBAL.TEXT.FONTFAMILY,
        fontWeight: '500',
    
    },

})