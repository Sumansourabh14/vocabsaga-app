import appData from "@/app.json";
import SocialNavLink from "@/components/socials/SocialNavLink";
import ScreenTitle from "@/components/text/ScreenTitle";
import { useCustomTheme } from "@/context/CustomThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function About() {
  const theme = useCustomTheme();

  return (
    <SafeAreaView className="flex-1">
      <View className="items-center flex-1">
        <ScreenTitle title="About" />
        <Text className="font-inter" style={{ color: theme.text }}>
          {appData.expo.description}
        </Text>

        <View className="w-full mt-12 px-4 border-t-hairline">
          <SocialNavLink
            link="https://forms.gle/6xkf5GbPMU5YvA1Q8"
            icon="chatbox-ellipses-outline"
            title="Give Feedback"
          />
          <SocialNavLink
            link="https://instagram.com/vocabsaga"
            icon="logo-instagram"
            title="Instagram"
          />
          <SocialNavLink
            link="https://vocabsaga.space"
            icon="laptop-outline"
            title="Website"
          />

          <Link href={`/privacy`} asChild>
            <Pressable className="flex-row items-center justify-between w-full p-4 py-6 border-b-hairline rounded">
              <View className="flex-row items-center">
                <Ionicons
                  name="document-lock-outline"
                  size={22}
                  className="mr-2"
                  color={theme.iconColor}
                />
                <Text
                  className="font-interBold text-lg"
                  style={{ color: theme.text }}
                >
                  Privacy Policy
                </Text>
              </View>
              <Ionicons name="arrow-forward-sharp" size={22} color={"gray"} />
            </Pressable>
          </Link>
          <Link href={`/termsOfUse`} asChild>
            <Pressable className="flex-row items-center justify-between w-full p-4 py-6 border-b-hairline rounded">
              <View className="flex-row items-center">
                <Ionicons
                  name="document-text-outline"
                  size={22}
                  className="mr-2"
                  color={theme.iconColor}
                />
                <Text
                  className="font-interBold text-lg"
                  style={{ color: theme.text }}
                >
                  Terms of Use
                </Text>
              </View>
              <Ionicons name="arrow-forward-sharp" size={22} color={"gray"} />
            </Pressable>
          </Link>
        </View>
      </View>
      <Text
        className="text-center font-inter text-sm"
        style={{ color: theme.subtitleText }}
      >
        Version {appData.expo.version}
      </Text>
      <Text
        className="text-center font-inter text-sm mt-2"
        style={{ color: theme.subtitleText }}
      >
        &copy; {new Date().getFullYear()} Vocabsaga by{" "}
        <Link href={`https://x.com/sumansourabh48`}>Suman Sourabh</Link>
      </Text>
    </SafeAreaView>
  );
}
