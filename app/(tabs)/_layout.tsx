import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#fff" }}>
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: "Bookmarks",
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmarks" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="word"
        options={{
          title: "Word",
          tabBarIcon: ({ color }) => (
            <Ionicons name="text" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
