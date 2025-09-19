import { useCustomTheme } from "@/context/CustomThemeContext";
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
  const theme = useCustomTheme();

  return (
    <Link href={externalLink} asChild>
      <Pressable className="flex-row items-center justify-between w-full p-4 py-6 border-b-hairline rounded">
        <View className="flex-row items-center">
          <Ionicons
            name={icon}
            size={22}
            className="mr-2"
            color={theme.iconColor}
          />
          <Text
            className="font-interBold text-lg"
            style={{ color: theme.text }}
          >
            {title}
          </Text>
        </View>
        <Ionicons name="arrow-forward-sharp" size={22} color={"gray"} />
      </Pressable>
    </Link>
  );
};

export default SocialNavLink;
