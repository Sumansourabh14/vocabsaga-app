import { useCustomTheme } from "@/context/CustomThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function TabsLayout() {
  const { theme } = useCustomTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.tabBarActiveColor,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: theme.cardBackground,
        },
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
              Home
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
