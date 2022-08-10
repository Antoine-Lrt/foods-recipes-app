import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// COSNTANTS //
import GLOBAL from '../constants/GLOBAL'

const RecipesInfosTag = ({text, details, time }) => {
  return (
    <View style={styles.tagContainer}>
      <Text style={styles.tagTxt}>{details}:{text} {time}</Text>
    </View>
  )
}

export default RecipesInfosTag

const styles = StyleSheet.create({
    tagContainer:{
        backgroundColor: GLOBAL.COLOR.FIRSTCOLOR,
        padding: 5,
        borderRadius: 50

    },

    tagTxt:{
        color:GLOBAL.COLOR.WHITE,
        fontSize: GLOBAL.TEXT.SMALL_TEXT,
        textTransform: 'uppercase',
        fontFamily: GLOBAL.TEXT.FONTFAMILY,
        fontWeight: '500',
    
    },

})