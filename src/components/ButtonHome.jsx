import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React from 'react'


const ButtonHome = ({text, color}) => {
  return (
    
    <TouchableOpacity style={{
        width: 300,
        backgroundColor: color,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems:'center',
        marginBottom: 30,
        }} 
        // onPress
        >
        <Text style={styles.buttonText}> {text} </Text>
    </TouchableOpacity>
  )
}

export default ButtonHome

const styles = StyleSheet.create({
    
    buttonText:{
        color: "white",
        fontFamily: 'Futura',
        fontWeight: 'bold' ,
       
    }
})