import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';

const SplashScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 items-center justify-center">
                <Image
                    source={require('../assets/images/logo.png')}
                    className="w-24 h-24"
                    resizeMode="contain"
                />
                <Text className="text-blue-500 text-2xl font-bold mt-4" style={{ fontFamily: 'Inika-Bold', fontSize: 24 }}>SAMTAL</Text>
            </View>
        </SafeAreaView>
    );
};

export default SplashScreen;