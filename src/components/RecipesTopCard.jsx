import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'

// COSNTANTS //
import GLOBAL from '../constants/GLOBAL'

const RecipesTopCard = ({ txtInfos, imageUrl}) => {
  return (
    <TouchableOpacity >
      <ImageBackground source={{uri: imageUrl}} resizeMode='cover' style={styles.cardContainer} imageStyle={{borderRadius: 12, opacity: .6}} >
        <Text style={styles.cardTitle}>{txtInfos}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default RecipesTopCard

const styles = StyleSheet.create({
    cardContainer: { 
        width: 150,
        height: 100,
        marginHorizontal: 9,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: GLOBAL.COLOR.BLACK,
        borderRadius: 12,
        shadowColor: 'black',
        shadowOffset: {width:0, height: 3},
        shadowOpacity: .3,
        shadowRadius:5,

      },
       
      cardTitle: {
        color: GLOBAL.COLOR.WHITE,
        fontSize: GLOBAL.TEXT.TEXT,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign:'center'
      },
})