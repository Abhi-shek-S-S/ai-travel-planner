import { View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                // tabBarPosition: 'bottom', // Set tabs to the bottom
                tabBarActiveTintColor: Colors.BLACK, // Customize active tab color
                // tabBarInactiveTintColor: 'gray',  // Customize inactive tab color
                // tabBarLabelStyle: { fontSize: 12 }, // Customize label size
                // tabBarStyle: { backgroundColor: '#fff' }, // Customize tab background color
            }}
        >
            <Tabs.Screen name="mytrip"
                options={{
                    tabBarLabel: 'My Trip',
                    tabBarIcon: ({ color }) => <Entypo name="location-pin" size={24} color={color} />
                }}
            />

            <Tabs.Screen name="discover"
                options={{
                    tabBarLabel: 'My Trip',
                    tabBarIcon: ({ color }) => <Ionicons name="globe-sharp" size={24} color={color} />
                }}
            />

            <Tabs.Screen name="profile"
                options={{
                    tabBarLabel: 'My Trip',
                    tabBarIcon: ({ color }) => <Ionicons name="people-circle" size={24} color={color} />
                }}
            />
        </Tabs>
    );
}
