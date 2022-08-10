import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import {SearchBar } from '@rneui/base';

import GLOBAL from '../constants/GLOBAL'



const CustomSearchBar = ({value, placeholder, onChangeText}) => {

    const [search, setSearch] = useState("");
    const updateSearch = (search) => {
      setSearch(search);
    };

  return (
    <SearchBar 
      platform="default"
      containerStyle={styles.searchContainer}
      inputContainerStyle={styles.searchInputContainer}
      inputStyle={styles.searchInput}
      leftIconContainerStyle={styles.searchIcons}
      rightIconContainerStyle={styles.searchIcons}
      lightTheme
      loadingProps={{}}
      onChangeText={onChangeText}
      onClearText={() => console.log(onClearText())}
      placeholder={placeholder}
      placeholderTextColor ={GLOBAL.COLOR.GREY}
      showCancel = 'false'
      cancelButtonTitle=""
      cancelButtonProps={{}}
      onCancel={() => console.log(onCancel())}
      value={value}    
      />

     


  )
}

export default CustomSearchBar

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: GLOBAL.COLOR.BACKGROUND,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    alignSelf: 'center'
    
   },

  searchInputContainer: {
    borderRadius: 40,
    backgroundColor: GLOBAL.COLOR.WHITE,
    height: 30,
    width: '90%'
  
    
  },

  searchInput: {
    fontSize: 15
  },

  searchIcons: {
    color: GLOBAL.COLOR.SECONDGREEN
  }


})




