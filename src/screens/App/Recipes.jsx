import { SafeAreaView, StyleSheet, StatusBar,View,Text,Dimensions} from 'react-native'


// DIMENSION //
const screenWidth = Dimensions.get('window').width


// COMPONENTS //
import RecipesCardsList from '../../components/RecipesCardsList'
import CustomScreenHeader from '../../components/CustomScreenHeader'



const Recipes = () => {

  return (
    <SafeAreaView style={{alignItems: 'center', justifyContent: 'space-between',}}>
      <StatusBar barStyle={'dark-content'} />
          <CustomScreenHeader
            text1={"Bonjour"}
            text2={"Antoine"}
          />
      <RecipesCardsList />    
    </SafeAreaView>
  )
}

export default Recipes

const styles = StyleSheet.create({

})