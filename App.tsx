import { View } from 'react-native'
import React from 'react'
import SplashScreen from './src/screens/SplashScreen'
import AccessCodeScreen from './src/screens/AccessCodeScreen'
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import BackHeader from './src/components/BackHeader'

const App = () => {
	return (
		<View className='bg-white h-full'>
			{/* <SplashScreen /> */}
			{/* <AccessCodeScreen /> */}
			{/* <LoginScreen /> */}
			{/* <HomeScreen /> */}
			<BackHeader />
		</View>
	)
}

export default App