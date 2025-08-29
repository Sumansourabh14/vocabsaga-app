import BackBtn from "@/components/iconButtons/BackBtn";
import ScreenTitle from "@/components/text/ScreenTitle";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="mt-4">
        <View className="flex-1 px-6">
          <View className="mt-4">
            <BackBtn />
          </View>
          <ScreenTitle title="Privacy Policy" />

          <Text className="font-inter text-gray-700 mt-4 mb-4">
            Last updated: August 29, 2025
          </Text>

          <View>
            <Text className="font-inter text-base mb-4">
              Vocabsaga values your privacy. This Privacy Policy explains how we
              handle your data when you use our app. All data is stored locally
              on your device, and no data is sent to or stored on any servers.
            </Text>

            <Text className="font-inter text-base font-bold mb-2">
              1. Information We Collect
            </Text>
            <Text className="font-inter text-base mb-4">
              - Usage Data: Bookmarks, stored locally on your device using local
              storage.
            </Text>

            <Text className="font-inter text-base font-bold mb-2">
              2. How We Use Your Information
            </Text>
            <Text className="font-inter text-base mb-4">
              We use your information to:
              {"\n"}- Improve app features and performance.
              {"\n"}- All data remains on your device and is not transmitted
              elsewhere.
            </Text>

            <Text className="font-inter text-base font-bold mb-2">
              3. Data Storage and Security
            </Text>
            <Text className="font-inter text-base mb-4">
              All data (e.g., bookmarks) is stored locally on your device. We
              use standard security measures to protect the app, but you are
              responsible for securing your device. Clearing app data or
              uninstalling the app will delete all stored information.
            </Text>

            <Text className="font-inter text-base font-bold mb-2">
              4. No Data Sharing
            </Text>
            <Text className="font-inter text-base mb-4">
              Vocabsaga does not share your data with any third parties or
              servers.
            </Text>

            <Text className="font-inter text-base font-bold mb-2">
              5. Your Rights
            </Text>
            <Text className="font-inter text-base mb-4">
              You can:
              {"\n"}- Clear your data by resetting the app or uninstalling it.
            </Text>

            <Text className="font-inter text-base font-bold mb-2">
              6. Contact Us
            </Text>
            <Text className="font-inter text-base">
              For questions, use our feedback form at:
            </Text>
            <Text
              className="underline mb-4"
              onPress={() => router.push("https://forms.gle/6xkf5GbPMU5YvA1Q8")}
              accessible={true}
              accessibilityLabel="Open feedback form"
            >
              forms.gle/6xkf5GbPMU5YvA1Q8
            </Text>

            <Text className="font-inter text-base mb-8">
              We may update this policy. Check here for the latest version.
            </Text>

            <Text className="text-gray-500 text-center font-inter text-sm mb-4">
              Vocabsaga &copy; {new Date().getFullYear()}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
