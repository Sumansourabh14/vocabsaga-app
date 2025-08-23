import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarStyle: { height: 70 },
      }}
    >
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
    </Tabs>
  );
}
