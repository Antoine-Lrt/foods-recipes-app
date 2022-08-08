import { StyleSheet, Text, TouchableOpacity, Image, View, Dimensions } from 'react-native'
import React from 'react'

// CONSTANTS //
import GLOBAL from '../constants/GLOBAL'
import StepCard from './StepCard'


const PreparationCard = ({stepIndex,stepText}) => {
  
  return (
    <View 
        style={styles.cardContainer}
    >
                <StepCard 
                  stepIndex={1}
                  stepText={"Dans une poêle à feu moyen, faites revenir les oignons émincés. A coloration, baissez le feu, salez et poivrez puis, laissez confire 20 minutes."}
                />
                 <StepCard 
                  stepIndex={2}
                  stepText={"Préchauffez votre four à 180°C. Faites grillez le bacon 12 minutes. Coupez les buns en deux et enfournez-les 5 minutes."}
                />
                 <StepCard 
                  stepIndex={3}
                  stepText={"Dans une poêle huilée à feu vif, faites cuire les steaks 2 minutes sur chaque face. Posez du cheddar sur le steak et enfournez 2 minutes."}
                />
                 <StepCard 
                  stepIndex={4}
                  stepText={"Tartinez les buns de sauce barbecue et d'oignons. Posez le steak, 3 tranches de bacon et refermez. Accompagnez les burgers au bacon de frites puis servez immédiatement."}
                />
  
                
    </View>
  )
}

export default PreparationCard

const styles = StyleSheet.create({
    cardContainer: { 
        padding : 10,
        width: 370,
        backgroundColor: 'white',
        alignItems:'center',
        borderRadius:12,
        shadowColor: 'black',
        shadowOffset: {width:0, height: 3},
        shadowOpacity: .3,
        shadowRadius:5,
        
      },
      
      stepIndexCircle:{
        margin: 12,
        width: 30,
        height:30,
        borderWidth: 2,
        borderRadius: 30,
        alignItems:'center',
        justifyContent: 'center'
        

    },
      





})