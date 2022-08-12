import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'


// COMPONANTS //
import CustomScreenHeader from '../../components/CustomScreenHeader'


const Profil = () => {
  return (
    <SafeAreaView>
        <CustomScreenHeader
          text1={"Mon"} 
          text2={"Profil"}
          />


          <Text> PAGE MODIFIER PROFIL, UTILISER UN BOTTOM SHEET ET LE DEFAULT VALUES DE HOOK FORM POUR LES INPUT</Text>
    </SafeAreaView>
  )
}

export default Profil

const styles = StyleSheet.create({})