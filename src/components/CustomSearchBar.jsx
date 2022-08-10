import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React, {useState} from 'react'
import {SearchBar } from '@rneui/base';

// DIMENSION //
const screenWidth = Dimensions.get('window').width

// CONSTATNTS //
import GLOBAL from '../constants/GLOBAL'



const CustomSearchBar = ({value, placeholder, onChangeText}) => {

    

  return (
    <View style={{alignItems:'center', }}>
      <SearchBar 
        platform="default"
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInputContainer}
        inputStyle={styles.searchInput}
        leftIconContainerStyle={styles.searchIcons}
        rightIconContainerStyle={styles.searchIcons}
        onChangeText={onChangeText}
        onClearText={() => console.log(onClearText())}
        placeholder={placeholder}
        placeholderTextColor ={GLOBAL.COLOR.GREY}
        showCancel = {false}
        cancelButtonTitle="hello"
        onCancel={() => console.log(onCancel())}
        value={value}    
        />
    </View>

     


  )
}

export default CustomSearchBar

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: GLOBAL.COLOR.BACKGROUND,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    width: screenWidth,
    padding:15
    
    
   },

  searchInputContainer: {
    borderRadius: 10,
    backgroundColor: GLOBAL.COLOR.WHITE,
    
  },

  searchInput: {
    fontSize: GLOBAL.TEXT.H3
  },

  searchIcons: {
    color: GLOBAL.COLOR.SECONDCOLOR
  }


})




