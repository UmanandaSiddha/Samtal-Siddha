import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';

const AccessCodeScreen = () => {

    return (
        <SafeAreaView className="flex-1 bg-white px-8 justify-center">
            <View className="mb-8">
                <Text className="text-3xl font-semibold text-gray-500">Login</Text>
                <Text className="text-md font-medium text-gray-400 mt-1">
                    Enter access code to continue
                </Text>
            </View>

            <View className="relative border-b border-gray-400 mb-12">
                <Image
                    source={require('../assets/icons/key-icon.png')}
                    className="absolute left-0 top-3 w-5 h-5"
                />
                <TextInput
                    className="pl-8 text-gray-800 text-md"
                    placeholder='ACCESS CODE'
                    placeholderTextColor="#9E9E9E"
                />
            </View>

            <View className='items-end'>
                <TouchableOpacity className="bg-blue-400 rounded-md py-2.5 px-6">
                    <Text className="text-white font-medium text-md">PROCEED</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default AccessCodeScreen;