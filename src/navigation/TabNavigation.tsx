import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native';

const TabNavigation = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const { width } = useWindowDimensions();
    const horizontalPadding = 16;
    const tabs = [
        { key: 'Home', label: 'Home', icon: require('../assets/icons/house.png') },
        { key: 'Groups', label: 'Groups', icon: require('../assets/icons/groups.png') },
        { key: 'Post', label: 'Post', icon: require('../assets/icons/post.png') },
        { key: 'Notifications', label: 'Notifications', icon: require('../assets/icons/notifications.png') },
        { key: 'Tasks', label: 'Tasks', icon: require('../assets/icons/tasks.png') },
    ];

    const tabWidth = (width - 2 * horizontalPadding) / tabs.length;

    return (
        <View className="bg-white shadow-md relative px-4">
            <View
                className="absolute top-0 h-[3px] bg-gray-700 rounded-t-md"
                style={{
                    width: tabWidth,
                    left: tabs.findIndex((tab) => tab.key === activeTab) * tabWidth + horizontalPadding,
                }}
            />

            <View className="flex-row justify-between py-3 pb-5">
                {tabs.map((tab) => (
                    <TouchableOpacity
                        key={tab.key}
                        className="items-center"
                        style={{ width: tabWidth }}
                        onPress={() => setActiveTab(tab.key)}
                    >
                        <Image
                            source={tab.icon}
                            className={`w-5 h-5 ${activeTab === tab.key ? 'tint-blue-500' : 'tint-gray-500'}`}
                        />
                        <Text className={`text-[10px] ${activeTab === tab.key ? 'text-gray-700' : 'text-gray-500'}`}>
                            {tab.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default TabNavigation;