import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

// CONSTANTS //
import GLOBAL from '../constants/GLOBAL'

// DIMENSION //
const screenWidth = Dimensions.get('window').width

const CustomScreenHeader = ({text1, text2}) => {
  return (
    <View style={styles.recipeScreenTextContainer}>
        <Text style={styles.recipeScreenText1}>{text1}</Text>
        <Text style={styles.recipeScreenText2}>{text2}</Text>
    </View>
  )
}

export default CustomScreenHeader

const styles = StyleSheet.create({
    recipeScreenTextContainer:{
        justifyContent:'flex-start', 
        width:screenWidth,
        padding:15,
        
      },
    
      recipeScreenText1:{
        fontSize:GLOBAL.TEXT.H2,
        letterSpacing:1.2,
        fontWeight: 'bold',
      },
      recipeScreenText2:{
        fontWeight: 'bold',
        fontSize:GLOBAL.TEXT.H1,
        color: GLOBAL.COLOR.FIRSTCOLOR
        
      }
})