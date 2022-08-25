import React, { useRef } from 'react'
import { Animated, Dimensions, ImageBackground, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// COMPONENTS //
import Slide from '../components/Slide'

// IMAGES //
import image from '../../assets/images/background.jpg'

// CONSTANTS //
import GLOBAL from '../constants/GLOBAL'


const OnBoarding = () => {


  const data = [
    
    {
      lighText: "Pour tout les ",
      boldText: "goûts",
      infosTitle : "Selon tes envies",
      infosText: "Burger, Sushi, Salades... tu trouveras une recette faite pour toi",
      imageUrl:  require("../../assets/images/poke-bowl-amico.png"),
      btnType: "SECOND",
    },
    {
      lighText: "Pour tout les ",
      boldText: "budgets",
      infosTitle: "Sans te ruiner",
      infosText: "Tu trouverras des recettes adaptées à ton budget",
      imageUrl:  require("../../assets/images/piggy-bank-amico.png"),
      btnType: "SECOND",
    },
    {
      lighText: "Pour tout les ",
      boldText: "niveaux",
      infosTitle : "Tu en es capable",
      infosText: "Chef étoilé ou pas , il y des recettes adaptées à ton niveau de cuisine",
      imageUrl:  require("../../assets/images/chef-amico.png"),
      btnType: "SECOND",
    },
    {
      lighText: "Faits toi ",
      boldText: "plaisir",
      infosTitle : "Let's go",
      infosText: "Decouvre nos dernieres recettes et montre à tout le monde tes talents de chef",
      imageUrl:  require("../../assets/images/smiley-face-amico.png"),
      btnType: "FIRST",
      btnTxt: "C'est partie !"
    },
  ]

  const scrollX = useRef(new Animated.Value(0)).current;

  const Indicator = ({scrollX}) => {
    return <View style={{position: 'absolute', bottom :50, flexDirection: 'row', }}>
     {data.map((_, i)=>{
      const inputRange = [(i -1) * width, i * width, (i +1) * width]
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [.8, 1.4, .8],
      extrapolate: 'clamp'
    })
      return <Animated.View
        key={`indicator-${i}`}
        style={{
          height:9,
          width:9,
          borderRadius:5,
          backgroundColor: GLOBAL.COLOR.FIRSTCOLOR,
          margin: 10,
          transform: [ {scale}]
        }}
      />
     })}
    </View>
  }

  const renderItem = ({item}) => (
    <Slide 
    lighText={item.lighText} 
    boldText={item.boldText} 
    infosTitle={item.infosTitle}
    infosText={item.infosText}
    imageUrl={item.imageUrl}
    btnType={item.btnType}
    btnTxt={item.btnTxt}
    btnOnPress={onPressedContinue}
    />
) 

const onPressedContinue = async () =>{
  await AsyncStorage.setItem('ONBOARDED','true'); 
  navigation.navigate('SignIn')
}




const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ImageBackground 
          source={image} 
          resizeMode="cover" 
          imageStyle={{opacity:.05}}
          style={styles.imageBackground}
          >

      <Animated.FlatList 
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          pagingEnabled
          horizontal 
          showsHorizontalScrollIndicator={false}       
          onEndReachedThreshold={.5}
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{nativeEvent : {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false}
          )}
        />
      <Indicator scrollX={scrollX}  />
      </ImageBackground>
  
    </View>
  )
}

export default OnBoarding

const {width} = Dimensions.get("window")

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
    
  },
  slider:{
    // flex: 1.4 ,
    backgroundColor: GLOBAL.COLOR.WHITE,
  },

  footer: {
    // flex: 1
  }
})