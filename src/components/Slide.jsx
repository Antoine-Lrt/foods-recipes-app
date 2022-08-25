// import LottieView from 'lottie-react-native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'

// COMPONENT //
import CustomButton from '../components/CustomButton'

// COSNTANTS //
import GLOBAL from '../constants/GLOBAL'




const {width} = Dimensions.get("window")



const Slide = ({lighText, boldText, imageUrl, infosTitle, infosText, btnTxt, btnType,btnOnPress }) => {

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
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={imageUrl}
                />
            </View>
            <View style={styles.slideInfosContainer}>
                <Text style={styles.slideInfosTitle} > {infosTitle} </Text>
                <Text style={styles.slideInfosText}> {infosText} </Text>
                <CustomButton 
                    text={btnTxt} 
                    type={btnType} 
                    onPress={btnOnPress}
                    width={200}
                    height={40}
                     />
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
        color: GLOBAL.COLOR.BLACK,
        fontFamily: GLOBAL.TEXT.FONTFAMILY,
        fontSize: GLOBAL.TEXT.H2,
        fontWeight: 'light',
        textTransform: 'uppercase'
    },
    slideBoldText: {
        color: GLOBAL.COLOR.FIRSTCOLOR,
        fontFamily: GLOBAL.TEXT.FONTFAMILY,
        fontWeight: 'bold',
        fontSize: GLOBAL.TEXT.H1,
        textTransform: 'uppercase',
        
    },

    imageContainer: {
        flex: .2,
        marginBottom: 30,
        alignItems:'center',
        justifyContent:'center',
    },

    image: {
        width:300,
        height:300
    },
    
    slideInfosContainer: {
        flex:.5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    slideInfosTitle: {
        color: GLOBAL.COLOR.BLACK,
        fontSize: GLOBAL.TEXT.H2,
        fontFamily: GLOBAL.TEXT.FONTFAMILY,
        fontWeight: 'bold' ,
        marginBottom: 10

    },

    slideInfosText: {
        color: GLOBAL.COLOR.BLACK,
          fontFamily: GLOBAL.TEXT.FONTFAMILY,
        fontWeight: 'light' ,
        fontSize: GLOBAL.TEXT.H3,
        width: 300,
        textAlign: 'center',
        marginBottom: 20
    },

  

})