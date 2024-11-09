import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';  // Import icons

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Home", 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ) 
        }} 
      />
      <Tabs.Screen 
        name="Location" 
        options={{ 
          title: "Location", 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location-outline" size={size} color={color} />
          ) 
        }} 
      />
      <Tabs.Screen 
        name="Profile" 
        options={{ 
          title: "Profile", 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ) 
        }} 
      />
    </Tabs>
  );
}
