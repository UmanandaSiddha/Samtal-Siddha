import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    Modal,
    TouchableWithoutFeedback,
} from 'react-native';
import TabNavigation from '../navigation/TabNavigation';
import Header from '../components/Header';

const posts = [
    {
        id: '1',
        name: 'Jake Nackos',
        title: 'Founder & CEO',
        time: '9h',
        content: 'When rolling out offers, we usually give two options:\nOption 1: Higher Salary + Lower ESOPs',
        media: { uri: 'https://via.placeholder.com/300' }, // Replace with your image
        reactions: 121,
        comments: 18,
        views: 4,
    },
    {
        id: '2',
        name: 'Jake Nackos',
        title: 'Founder & CEO',
        time: '9h',
        content: 'When rolling out offers, we usually give two options:\nOption 1: Higher Salary + Lower ESOPs',
        media: { uri: 'https://via.placeholder.com/300' }, // Replace with your image
        reactions: 121,
        comments: 18,
        views: 4,
    },
    {
        id: '3',
        name: 'Jake Nackos',
        title: 'Founder & CEO',
        time: '9h',
        content: 'When rolling out offers, we usually give two options:\nOption 1: Higher Salary + Lower ESOPs',
        media: { uri: 'https://via.placeholder.com/300' }, // Replace with your image
        reactions: 121,
        comments: 18,
        views: 4,
    },
    {
        id: '4',
        name: 'Jake Nackos',
        title: 'Founder & CEO',
        time: '9h',
        content: 'When rolling out offers, we usually give two options:\nOption 1: Higher Salary + Lower ESOPs',
        media: { uri: 'https://via.placeholder.com/300' }, // Replace with your image
        reactions: 121,
        comments: 18,
        views: 4,
    },
    {
        id: '5',
        name: 'Jake Nackos',
        title: 'Founder & CEO',
        time: '9h',
        content: 'When rolling out offers, we usually give two options:\nOption 1: Higher Salary + Lower ESOPs',
        media: { uri: 'https://via.placeholder.com/300' }, // Replace with your image
        reactions: 121,
        comments: 18,
        views: 4,
    },
];

const reactions = [
    { label: 're1', icon: require('../assets/icons/re1.png') },
    { label: 're2', icon: require('../assets/icons/re2.png') },
    { label: 're3', icon: require('../assets/icons/re3.png') },
    { label: 're4', icon: require('../assets/icons/re4.png') },
    { label: 're5', icon: require('../assets/icons/re5.png') },
    { label: 're6', icon: require('../assets/icons/re6.png') },
]

const HomeScreen = () => {

    const [isReactionVisible, setIsReactionVisible] = useState(false);
    const [currentPostId, setCurrentPostId] = useState<number | null>(null);

    const handleLongPress = (postId: number) => {
        setCurrentPostId(postId);
        setIsReactionVisible(true);
    };

    const handleReactionSelect = (reaction: string) => {
        console.log(`Selected reaction: ${reaction} for post ${currentPostId}`);
        setIsReactionVisible(false);
    };

    const renderPost = ({ item }: any) => (
        <View className="bg-white mb-4 rounded-lg px-3 py-2">
            <View className="flex-row justify-between mb-2">
                <View className='flex-row'>
                    <Image
                        source={require('../assets/icons/user-profile.png')}
                        className="w-14 h-14 rounded-full"
                    />
                    <View className="ml-3">
                        <Text className="text-md font-medium text-gray-600">{item.name}</Text>
                        <Text className="text-xs text-gray-500">{item.title}</Text>
                        <Text className="text-xs text-gray-400">{item.time}</Text>
                    </View>
                </View>
                <Text className='text-md text-gray-500'>•••</Text>
            </View>
            <Text className="text-gray-800 text-xs mb-2">{item.content}</Text>
            <Image
                source={item.media}
                className="w-full h-40 rounded-sm mb-2"
                resizeMode="cover"
            />

            <View className="flex-row justify-between items-center pt-2 pb-2">
                <View className='flex-row gap-2 items-center'>
                    <View className='flex-row gap-0'>
                        <Image
                            source={require('../assets/icons/r1.png')}
                            className="w-5 h-5 rounded-full"
                        />
                        <Image
                            source={require('../assets/icons/r2.png')}
                            className="w-5 h-5 rounded-full"
                        />
                        <Image
                            source={require('../assets/icons/r3.png')}
                            className="w-5 h-5 rounded-full"
                        />
                    </View>
                    <Text className="text-gray-500 text-sm">{item.reactions}</Text>
                </View>
                <Text className="text-gray-500 text-sm">
                    {`${item.comments} comments • ${item.views} views`}
                </Text>
            </View>

            <View className="flex-row justify-between items-center pt-2 border-t border-gray-300">
                <Image
                    source={require('../assets/icons/user-profile.png')}
                    className="w-6 h-6 rounded-full"
                />
                <View className='flex-row gap-6'>
                    <TouchableOpacity
                        className="items-center"
                        onLongPress={() => handleLongPress(item.id)}
                    >
                        <Image
                            source={require('../assets/icons/like.png')}
                            className={`w-5 h-5 tint-gray-500`}
                        />
                        <Text className={`text-[10px] text-gray-500`}>
                            Like
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="items-center"
                    >
                        <Image
                            source={require('../assets/icons/comment.png')}
                            className={`w-5 h-5 tint-gray-500`}
                        />
                        <Text className={`text-[10px] text-gray-500`}>
                            Comment
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <Header />

            <FlatList
                data={posts}
                renderItem={renderPost}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingTop: 8 }}
            />

            <TabNavigation />

            <Modal
                transparent={true}
                visible={isReactionVisible}
                animationType="fade"
                onRequestClose={() => setIsReactionVisible(false)}
            >
                <TouchableWithoutFeedback onPress={() => setIsReactionVisible(false)}>
                    <View className="flex-1 justify-center items-center bg-transparent bg-opacity-50">
                        <TouchableWithoutFeedback>
                            <View className="bg-white shadow-2xl shadow-gray-700 rounded-lg p-4 flex-row justify-evenly space-x-4">
                                {reactions.map((reaction) => (
                                    <TouchableOpacity
                                        key={reaction.label}
                                        onPress={() => handleReactionSelect(reaction.label)}
                                    >
                                        <Image
                                            source={reaction.icon}
                                            className="w-10 h-10"
                                        />
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </SafeAreaView>
    );
};

export default HomeScreen;