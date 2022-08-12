 import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Pressable } from 'react-native';


// HOOK //
import {Controller} from 'react-hook-form'

// CONSTANT //
import GLOBAL from '../constants/GLOBAL'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'




const CustomInputPassword = ({control, name, placeholder, rules = {},textError, isShowIcon}) => {

  const [isVisible, setIsVisible] = useState(true)
  const [icon, setIcon] = useState(faEyeSlash)

  const showPassword = () => {
    if(isVisible === true){
      setIsVisible(false)
      setIcon(faEye)
    } else if(isVisible === false) {
      setIsVisible(true) 
      setIcon(faEyeSlash)     
    } 
  } 

  
  return (
    <Controller 
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <>
            <View style={[styles.inputContainer,
             {borderColor:  error ? GLOBAL.COLOR.INPUT_BORDER_ERROR : GLOBAL.COLOR.INPUT_BORDER_VALIDE,
              borderWidth: error ? GLOBAL.COLOR.INPUT_BORDER_WIDTH_ERROR : GLOBAL.COLOR.INPUT_BORDER_WIDTH_VALIDE }
             ]}>
             
                <TextInput 
                  value={value}
                  style={styles.input} 
                  onChangeText={onChange} 
                  onBlur={onBlur} 
                  placeholder={placeholder}
                  secureTextEntry={isVisible} 
                  /> 
                <Pressable 
                  onPress={showPassword}
                  style={styles.icon}
                >
                  <FontAwesomeIcon 
                    icon={icon} 
                    size={20}
                    />
                </Pressable>
            </View>
            {error && (
              <Text style={{color: GLOBAL.COLOR.INPUT_BORDER_ERROR, alignSelf:'stretch', }}> {error.message || 'Error'}</Text>
            )}

          </>
        )}
      />
  );
}

export default CustomInputPassword;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: GLOBAL.COLOR.WHITE,
    width: '100%',
    borderColor: GLOBAL.COLOR.INPUT_BORDER_VALIDE,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    padding: 15,
    paddingHorizontal: 20,
    margin:5
  },

  input: {
    color: '',
    width: '100%'
  },

  icon:{
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: 40,
      height: 40,
      position: 'absolute',
      right: 2}
});