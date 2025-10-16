import React from 'react'
import LoginScreen from './src/screens/LoginScreen.js'
import HomeScreen from './src/screens/HomeScreen.js'
import { View } from 'react-native'
import DetailsScreen from './src/screens/DetailsScreen.js'

const App = () => {
  return (
    <View style={{flex: 1}}>
    <DetailsScreen />
    </View>
  )
}

export default App