import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'


const CustomInput = ({value, setValue, placeholder, secureText}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
            placeholder={placeholder}
            style={styles.textInput}
            value={value}
            onChangeText={setValue}
            secureTextEntry={secureText}
            />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    inputContainer:{
        backgroundColor:'white',
        width:300,
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        justifyContent: 'center',
        padding:10,
        paddingHorizontal: 20
    },

    textInput: {}
})