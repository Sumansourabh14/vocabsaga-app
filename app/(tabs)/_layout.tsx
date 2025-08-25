import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
      }}
    >
      <Tabs.Screen
        name="learn"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bulb" size={24} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                color,
              }}
              className="mt-1 text-[10px] font-interBold"
            >
              Learn
            </Text>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmarks" size={24} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                color,
              }}
              className="mt-1 text-[10px] font-interBold"
            >
              Bookmarks
            </Text>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                color,
              }}
              className="mt-1 text-[10px] font-interBold"
            >
              Search
            </Text>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="information-circle-outline"
              size={24}
              color={color}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                color,
              }}
              className="mt-1 text-[10px] font-interBold"
            >
              About
            </Text>
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
