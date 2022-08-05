import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/App/Home'


// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faBowlFood ,faHeart, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

// import GLOBAL from '../../utils/GLOBAL'

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
        name ="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarScreenContainer}>
              {/* <FontAwesomeIcon 
                icon={faBowlFood} 
                size={20}
                style={{
                  color: focused ? GLOBAL.COLOR.FIRSTGREEN : GLOBAL.COLOR.GREY
                }}/> */}
             <Text style={{
                marginTop: 3,
                fontSize: 10,
                color: 'green'
              }}>Recettes</Text>
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
    justifyContent: 'center'
  },

  tabBarScreenText:{
    fontSize: 10,
  }

  
})