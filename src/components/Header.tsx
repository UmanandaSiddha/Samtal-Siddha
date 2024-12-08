import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

const Header = () => {
    return (
        <View className="bg-white px-4 py-3 border-b border-gray-300 shadow-sm flex-row items-center">
            <Image
                source={require('../assets/icons/user-profile.png')}
                className="w-10 h-10 rounded-full"
            />
            <View className="relative flex-1 mx-4">
                <Image
                    source={require('../assets/icons/search.png')}
                    className="z-10 absolute left-3 top-2 w-6 h-6"
                />
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="#9E9E9E"
                    className="bg-gray-100 rounded-md pl-10 py-2 text-sm text-gray-600"
                />
            </View>
            <TouchableOpacity>
                <Image
                    source={require('../assets/icons/chat-icon.png')}
                    className="w-6 h-6"
                />
            </TouchableOpacity>
        </View>
    )
}

export default Header;