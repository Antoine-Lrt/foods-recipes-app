import { Dimensions, StyleSheet, Text, View, Animated, FlatList, ImageBackground } from 'react-native'
import React, {useRef} from 'react'
import { extrapolate, useValue } from 'react-native-reanimated'
import Slide from './Slide'


import image from '../../../../assets/images/background.jpg'

const OnBoarding = () => {

  const data = [

    {
      lighText: "Pour tout les ",
      boldText: "goûts",
      infosTitle : "Selon tes envies",
      infosText: "Viandes, Poisson, Burger, Vegan... tu trouveras une recettes faites pour toi",
      iconUrl: require("../../../../assets/AnimationIcons/92072-foodie.json"),
      btnType: "SECOND",
    },
    {
      lighText: "Pour tout les ",
      boldText: "budgets",
      infosTitle: "Sans te ruiner",
      infosText: "Tu trouverras des recettes adaptées à ton budget",
      iconUrl:  require("../../../../assets/AnimationIcons/55607-flying-wallet-money.json"),
      btnType: "SECOND",
    },
    {
      lighText: "Pour tout les ",
      boldText: "niveaux",
      infosTitle : "Tu en es capable",
      infosText: "Chef étoilé ou pas , il y des recettes adaptées à ton niveau de cuisine",
      iconUrl:  require("../../../../assets/AnimationIcons/92072-foodie.json"),
      btnType: "SECOND",
    },
    {
      lighText: "Faits toi ",
      boldText: "plaisir",
      infosTitle : "Let's go",
      infosText: "Decouvre nos dernieres recettes et montre à tout le monde tes talents de chef",
      iconUrl: require("../../../../assets/AnimationIcons/24845-holding-money.json"),
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
          backgroundColor:'grey',
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
    iconUrl={item.iconUrl}
    btnType={item.btnType}
    btnTxt={item.btnTxt}
    />
) 

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
      <Indicator scrollX={scrollX} />
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
    backgroundColor: 'white', // METTRE AVEC GLOBALS APRES
  },

  footer: {
    // flex: 1
  }
})