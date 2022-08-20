import { StyleSheet, Text, TouchableOpacity, ImageBackground, View, Dimensions } from 'react-native'
import React from 'react'

// COMPONANTS //
import CustomButton from '../components/CustomButton'

// CONSTANTS //
import GLOBAL from '../constants/GLOBAL'

const RecipesCard = ({title, category, level, imageUrl, onPressAction, ingredients, step}) => {
  
  return (
    // <TouchableOpacity 
    //     style={styles.cardContainer}
    //     onPress={onPressAction}
    // >
    //       <View style={styles.cardImgContainer}>
    //           <Image source={{uri: imageUrl}} style={styles.cardImg} />
    //       </View>
    //       <View style={styles.cardTextContainer}>
    //           <Text style={styles.cardTitle}>{title}</Text>
    //           <Text style={styles.cardInfosCategory}>{category}</Text>
    //           <Text style={styles.cardInfosLevel}>{level}</Text>
    //       </View>
    // </TouchableOpacity>

    <View style={{alignItems: 'center'}}>

      <TouchableOpacity 
      onPress={onPressAction}
  >
            <ImageBackground source={{uri: imageUrl}} resizeMode='cover' style={styles.cardContainer} imageStyle={{borderRadius: 12, opacity: .6}}>
                  <View style={styles.cardTextContainer}>
                      <Text style={styles.cardTitle}>{title}</Text>
                      <Text style={styles.cardInfosLevel}>{level}</Text>
                  </View>
            </ImageBackground> 
        </TouchableOpacity>
        <CustomButton
          width={170}
          height={40}
          text={'Ajouter aux favoris'}
          fontWeight={'500'}
          fontSize={GLOBAL.TEXT.TEXT}
        />
    </View>
  )
}

export default RecipesCard

const styles = StyleSheet.create({
    // cardContainer: { 
    //     marginTop: 10,
    //     width: 350,
    //     height: 100,
    //     flexDirection: 'row',
    //     backgroundColor: 'white',
    //     alignItems:'center',
    //     borderRadius:12,
    //     shadowColor: 'black',
    //     shadowOffset: {width:0, height: 3},
    //     shadowOpacity: .3,
    //     shadowRadius:5,
    //   },

    //   cardImgContainer:{},

    //   cardImg: {
    //     borderRadius: 100,
    //     height: 70,
    //     width: 70,
    //     margin: 15
    //   },

    //   cardImgContainer:{
    //     color: GLOBAL.COLOR.BLACK,

    //   },
       
    //   cardTitle: {
    //     fontSize: GLOBAL.TEXT.H3,
    //     fontWeight: 'bold',
    //     textTransform: 'uppercase',
    //     fontFamily: GLOBAL.TEXT.FONTFAMILY
    //   },
      
    //   cardInfosCategory:{
    //     fontSize: GLOBAL.TEXT.TEXT
    //   },

    //   cardInfosLevel:{
    //     fontSize: GLOBAL.TEXT.TEXT,
    //     fontStyle: 'italic'
    //   }


    cardContainer: { 
      margin: 9,
      width: 170,
      height: 200,
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



    cardTextContainer:{
      flexDirection: 'column',
      padding: 10,
      alignItems: 'center'

    },
     
    cardTitle: {
      fontSize: GLOBAL.TEXT.TEXT,
      color: GLOBAL.COLOR.WHITE,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontFamily: GLOBAL.TEXT.FONTFAMILY
    },
    
    cardInfosCategory:{
      fontSize: GLOBAL.TEXT.TEXT,
      color: GLOBAL.COLOR.WHITE,
      fontFamily: GLOBAL.TEXT.FONTFAMILY,
    },

    cardInfosLevel:{
      fontSize: GLOBAL.TEXT.TEXT,
      color: GLOBAL.COLOR.WHITE,
      fontFamily: GLOBAL.TEXT.FONTFAMILY,

    }



})