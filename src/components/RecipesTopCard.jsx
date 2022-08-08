import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'

// COSNTANTS //
import GLOBAL from '../constants/GLOBAL'

const RecipesTopCard = ({title, txtInfos, imageUrl}) => {
  return (
    <TouchableOpacity >
      <ImageBackground source={{uri: imageUrl}} resizeMode='cover' style={styles.cardContainer} imageStyle={{borderRadius: 12, opacity: .6}} >
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardInfos}>{txtInfos} </Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default RecipesTopCard

const styles = StyleSheet.create({
    cardContainer: { 
        width: 250,
        height: 150,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        borderRadius: 12

      },
       
      cardTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase'
      },
    
      cardInfos: {
        color: 'white',
        fontSize: 10,
        fontWeight: '300',
        textTransform: 'uppercase'
      },
})