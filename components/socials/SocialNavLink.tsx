import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

type SocialNavLinkProps = {
  link: string;
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
};

const SocialNavLink = ({ link, icon, title }: SocialNavLinkProps) => {
  const externalLink = link as `https://${string}`;

  return (
    <Link href={externalLink} asChild>
      <Pressable className="flex-row items-center justify-between w-full p-4 py-6 border-b-hairline rounded">
        <View className="flex-row items-center">
          <Ionicons name={icon} size={24} className="mr-2" color={"grey"} />
          <Text className="font-playfairBold text-lg">{title}</Text>
        </View>
        <Ionicons name="arrow-forward-sharp" size={24} color={"gray"} />
      </Pressable>
    </Link>
  );
};

export default SocialNavLink;
