import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import BackHeader from '../components/BackHeader';

const PostScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <BackHeader />

            <View>
                <Text>Post Screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default PostScreen;