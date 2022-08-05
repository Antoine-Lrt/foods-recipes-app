import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    width: 300,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  textInput: {},
});
function CustomInput({
  value, setValue, placeholder, secureText,
}) {
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
  );
}

export default CustomInput;

