import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'


const CustomButton = ({text, onPress, type= "FIRST", bgColor, txtColor }) => {
  return (
    
    <TouchableOpacity 
        style={[
          styles.buttonContainer, 
          styles[`buttonContainer_${type}`],
          bgColor ? {borderColor: bgColor, backgroundColor: null, borderWidth: 1} : {}
          ]} 
        onPress={onPress}
        >
        <Text style={[
          styles.buttonText, 
          styles[`buttonText_${type}`],
          txtColor ? {color: txtColor} : {},
          ]}> {text} </Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    
  

    buttonContainer:{
      width: 250,
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems:'center',
      marginBottom: 10,
    },

    buttonContainer_FIRST: {
      backgroundColor: "green"
    },

    buttonContainer_SECOND: {
    },

    buttonContainer_TERTIARY: {
      borderColor: "green",
      borderWidth:2
    },

    buttonText:{
      color: "white",
      fontFamily: 'Futura',
      fontWeight: '700' ,
    },

      buttonText_SECOND:{
        color: "grey",
        fontWeight: '500' ,
    },

    buttonText_TERTIARY:{
      color: "green",
  },

})

