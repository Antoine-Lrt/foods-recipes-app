import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Recipes from '../screens/App/Recipes'
import Favorites from '../screens/App/Favorites'
import Profil from '../screens/App/Profil'


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBowlFood ,faHeart, faUser } from '@fortawesome/free-solid-svg-icons'

// import Lottie from 'lottie-react-native';



// CONSTANTS 
import GLOBAL from '../constants/GLOBAL'

const TabBar = () => {

  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false  
      }}
    >
      <Tab.Screen 
        name ="Recipes" 
        component={Recipes} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarScreenContainer}>
              <FontAwesomeIcon 
                icon={faBowlFood} 
                size={20}
                style={{
                  color: focused ? GLOBAL.COLOR.FIRSTCOLOR: GLOBAL.COLOR.GREY
                }}/>
                <View style={{backgroundColor: 'red'}}>

                </View>
                <View>
                {/* <Lottie source={require('../../assets/AnimationIcons/favorite-heart.json')} style={{}} loop /> */}
             <Text style={{
                marginTop: 3,
                fontSize: GLOBAL.TEXT.SMALL_TEXT,
                color: focused ? GLOBAL.COLOR.FIRSTCOLOR : GLOBAL.COLOR.GREY
              }}>Recettes</Text>

                </View>
            </View>
          )
        }}
        />
        <Tab.Screen 
        name ="Favorites" 
        component={Favorites} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarScreenContainer}>
              <FontAwesomeIcon 
                icon={faHeart} 
                size={20}
                style={{
                  color: focused ? GLOBAL.COLOR.FIRSTCOLOR : GLOBAL.COLOR.GREY
                }}/>
             <Text style={{
                marginTop: 3,
                fontSize: GLOBAL.TEXT.SMALL_TEXT,
                color: focused ? GLOBAL.COLOR.FIRSTCOLOR : GLOBAL.COLOR.GREY
              }}>Favoris</Text>
            </View>
          )
        }}
        />
        <Tab.Screen 
        name ="Profil" 
        component={Profil} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarScreenContainer}>
              <FontAwesomeIcon 
                icon={faUser} 
                size={20}
                style={{
                  color: focused ? GLOBAL.COLOR.FIRSTCOLOR : GLOBAL.COLOR.GREY
                }}/>
             <Text style={{
                marginTop: 3,
                fontSize: GLOBAL.TEXT.SMALL_TEXT,
                color: focused ? GLOBAL.COLOR.FIRSTCOLOR : GLOBAL.COLOR.GREY
              }}>Profil</Text>
            </View>
          )
        }}
        />
    </Tab.Navigator>
  )
}

export default TabBar

const styles = StyleSheet.create({
  tabBarScreenContainer:{
    alignItems: 'center', 
    justifyContent: 'center',
  },

  tabBarScreenText:{
    fontSize: 10,
  }

  
})