import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';

const LoginScreen = () => {

    return (
        <SafeAreaView className="flex-1 bg-white px-8 justify-center">
            <View className="mb-8">
                <Text className="text-3xl font-semibold text-gray-500">Login</Text>
                <Text className="text-md font-medium text-gray-400 mt-1">
                    Please signin to continue.
                </Text>
            </View>

            <View className="relative border-b border-gray-400 mb-4">
                <Image
                    source={require('../assets/icons/user.png')}
                    className="absolute left-0 top-3 w-5 h-5"
                />
                <TextInput
                    className="pl-8 text-gray-800 text-md"
                    placeholder='EMPLOYEE ID'
                    placeholderTextColor="#9E9E9E"
                />
            </View>

            <View className="relative border-b border-gray-400 mb-12">
                <Image
                    source={require('../assets/icons/pass.png')}
                    className="absolute left-0 top-3 w-5 h-5"
                />
                <TextInput
                    className="pl-8 text-gray-800 text-md"
                    placeholder='PASSWORD'
                    placeholderTextColor="#9E9E9E"
                />
                <Text className='absolute top-3 right-0 text-md font-medium text-blue-400'>FORGOT</Text>
            </View>

            <View className='items-end'>
                <TouchableOpacity className="bg-blue-400 rounded-md py-2.5 px-8">
                    <Text className="text-white font-medium text-md">LOGIN</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;