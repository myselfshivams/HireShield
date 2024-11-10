import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#2F2F2F',
          height: 64,
          borderTopWidth: 0,
          paddingBottom: 5,
          paddingTop: 8,
        },
        tabBarActiveTintColor: "#8A2BE2",
        tabBarInactiveTintColor: "#A9A9A9",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: 5,
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === 'index') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Location') {
            iconName = focused ? 'location' : 'location-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="Location"
        options={{
          title: 'Location',
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}
