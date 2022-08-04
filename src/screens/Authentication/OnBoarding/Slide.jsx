import { Dimensions, StyleSheet, Text, View,ImageBackground } from 'react-native'
import LottieView from 'lottie-react-native'
import React, { useRef } from 'react'
import CustomButton from '../../../components/CustomButton'
import Animated from 'react-native-reanimated'




const {width} = Dimensions.get("window")



const Slide = ({lighText, boldText, iconUrl, infosTitle, infosText, btnTxt, btnType}) => {

    const Indicator = ({scrollx}) => {
        return <View>
            {}
        </View>
    }
  

    return (
        <View style={styles.container}> 
            <Text style={styles.textContainer}>
                <Text style={styles.slideLightText}>{lighText}</Text>
                <Text style={styles.slideBoldText}>{boldText}</Text>
            </Text>
            <View style={styles.iconContainer}>
                <LottieView 
                        source={iconUrl}
                        autoPlay 
                        loop 
                        style={{
                        height: 350,
                        }}
                />
            </View>
            <View style={styles.slideInfosContainer}>
                <Text style={styles.slideInfosTitle} > {infosTitle} </Text>
                <Text style={styles.slideInfosText}> {infosText} </Text>
                <CustomButton text={btnTxt} type={btnType} />
            </View>
           
  
            
        
        </View>
  )
}

export default Slide

const styles = StyleSheet.create({
    container: {
        width, 
        
    },

    slideHeader:{
        // flex:.4,
        resizeMode: 'cover',
    },

    
    textContainer:{
        flex:.4,
        marginTop: 50,
        marginLeft: 15,
        lineHeight: 45,
    },
    
    slideLightText:{
        color: "grey",
        fontFamily: 'Futura',
        fontSize: 35,
        fontWeight: 'light',
        textTransform: 'uppercase'
    },
    slideBoldText: {
        color: "green",
        fontFamily: 'Futura',
        fontWeight: 'bold' ,
        fontSize: 40,
        textTransform: 'uppercase',
        
    },

    iconContainer: {
        flex: .3,
        marginBottom: 30,
        alignItems:'center',
        justifyContent:'center',
    },
    
    slideInfosContainer: {
        flex:.5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    slideInfosTitle: {
        color: "black",
        fontSize:30,
        fontFamily: 'Futura',
        fontWeight: 'bold' ,
        marginBottom: 10

    },

    slideInfosText: {
        color: "black",
        fontFamily: 'Futura',
        fontWeight: 'light' ,
        fontSize: 15,
        width: 300,
        textAlign: 'center',
        marginBottom: 20
    },

  

})