import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React from 'react'


const CustomButton = ({text, onPress, type= "FIRST", bgColor, txtColor }) => {
  return (
    
    <TouchableOpacity 
        style={[
          styles.buttonContainer, 
          styles[`buttonContainer_${type}`],
          bgColor ? {backgroundColor: bgColor} : {}
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
      width: 300,
      height: 60,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems:'center',
      marginBottom: 30,
    },

    buttonContainer_FIRST: {
      backgroundColor: "green"
    },

    buttonContainer_SECOND: {
    },

    buttonText:{
      color: "white",
      fontFamily: 'Futura',
      fontWeight: 'bold' ,
    },

      buttonText_SECOND:{
        color: "grey",
        fontFamily: 'Futura',
        fontWeight: 'bold' ,
    },

})

