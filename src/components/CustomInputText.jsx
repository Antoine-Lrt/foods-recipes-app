 import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';


// HOOK //
import {Controller} from 'react-hook-form'

// CONSTANT //
import GLOBAL from '../constants/GLOBAL'



const CustomInputText = ({
  control, 
  name, 
  placeholder, 
  rules = {}, 
  secureTextEntry,
  textError
}) => {
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
                  secureTextEntry={secureTextEntry} 
                  /> 
            </View>
            {error && (
              <Text style={{color: GLOBAL.COLOR.INPUT_BORDER_ERROR, alignSelf:'stretch', }}> {error.message || 'Error'}</Text>
            )}

          </>
        )}
      />
  );
}

export default CustomInputText;

const styles = StyleSheet.create({
  inputContainer: {
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
    color: ''
  },
});