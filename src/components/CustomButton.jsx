import { disabled } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'


// CONSTANTS //
import GLOBAL from '../constants/GLOBAL'


const CustomButton = ({text, onPress, disabled, type= "FIRST", bgColor, txtColor, width, height, fontWeight, fontSize}) => {
  return (
    
    <TouchableOpacity 
        style={[
          styles.buttonContainer, 
          styles[`buttonContainer_${type}`],
          width= {width},
          height= {height},
          bgColor ? {borderColor: bgColor, backgroundColor: null, borderWidth: 1} : {}
          ]} 
          onPress={onPress}
          disabled={disabled}
        
        >
        <Text style={[
          styles.buttonText, 
          styles[`buttonText_${type}`],
          fontWeight= {fontWeight},
          fontSize={fontSize},
          txtColor ? {color: txtColor} : {},
          ]}> {text} </Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    
  

    buttonContainer:{

      borderRadius: 10,
      justifyContent: 'center',
      alignItems:'center',
  
      marginTop: 5
    },

    buttonContainer_FIRST: {
      backgroundColor: GLOBAL.COLOR.FIRSTCOLOR
    },

    buttonContainer_SECOND: {
    },

    buttonContainer_TERTIARY: {
      borderColor: GLOBAL.COLOR.FIRSTCOLOR,
      borderWidth:2
    },

    buttonText:{
      color: GLOBAL.COLOR.WHITE,
      fontFamily: 'Futura',
    },

      buttonText_SECOND:{
        color: GLOBAL.COLOR.GREY,
    },

    buttonText_TERTIARY:{
      color: GLOBAL.COLOR.FIRSTCOLOR,
  },

})

