import appData from "@/app.json";
import SocialNavLink from "@/components/socials/SocialNavLink";
import ScreenTitle from "@/components/text/ScreenTitle";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function About() {
  return (
    <SafeAreaView className="flex-1">
      <View className="items-center flex-1">
        <ScreenTitle title="Vocabsaga" />
        <Text className="font-inter">{appData.expo.description}</Text>

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
            link="https://x.com/vocabsaga"
            icon="logo-twitter"
            title="Twitter/X"
          />
          <SocialNavLink
            link="https://vocabsaga.space"
            icon="laptop-outline"
            title="Website"
          />
        </View>
      </View>
      <Text className="text-center font-inter text-sm">
        Version {appData.expo.version}
      </Text>
      <Text className="text-gray-500 text-center font-inter text-sm mt-2">
        &copy; {new Date().getFullYear()} Vocabsaga by{" "}
        <Link href={`https://x.com/sumansourabh48`}>Suman Sourabh</Link>
      </Text>
    </SafeAreaView>
  );
}
