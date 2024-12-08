import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

const BackHeader = () => {
    return (
        <View className="bg-white px-4 py-3 border-b border-gray-300 shadow-sm flex-row items-center">
            <TouchableOpacity>
                <Image
                    source={require('../assets/icons/back.png')}
                    className="w-4 h-4"
                />
            </TouchableOpacity>
        </View>
    )
}

export default BackHeader;