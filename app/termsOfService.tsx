import BackBtn from "@/components/iconButtons/BackBtn";
import ScreenTitle from "@/components/text/ScreenTitle";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TermsOfService() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 px-6">
        <View className="mt-4">
          <BackBtn />
        </View>
        <ScreenTitle title="Terms of Service" />

        <ScrollView className="mt-4">
          <Text className="font-inter text-gray-700 mb-4">
            Last updated: August 29, 2025
          </Text>

          <Text className="font-inter text-base mb-4">
            Welcome to Vocabsaga. By using our app or website, you agree to the
            following Terms of Service. Please read them carefully before using
            our services.
          </Text>

          <Text className="font-inter text-base font-bold mb-2">
            1. Use of the Service
          </Text>
          <Text className="font-inter text-base mb-4">
            Vocabsaga is provided for personal learning and educational purposes
            only. You agree not to misuse the platform in any way that could
            harm the service, its users, or violate applicable laws.
          </Text>

          <Text className="font-inter text-base font-bold mb-2">
            2. User Data
          </Text>
          <Text className="font-inter text-base mb-4">
            All your bookmarks, saved words, and preferences are stored locally
            on your device. Vocabsaga does not store or collect your personal
            data on external servers. Clearing storage or uninstalling the app
            will erase all data permanently.
          </Text>

          <Text className="font-inter text-base font-bold mb-2">
            3. Intellectual Property
          </Text>
          <Text className="font-inter text-base mb-4">
            All content, features, and branding of Vocabsaga are the
            intellectual property of the creators. You may not copy, reproduce,
            or distribute any part of the service without prior written consent.
          </Text>

          <Text className="font-inter text-base font-bold mb-2">
            4. Limitations of Liability
          </Text>
          <Text className="font-inter text-base mb-4">
            Vocabsaga is provided &quot;as is&quot; without warranties of any
            kind. We are not responsible for any issues, data loss, or damages
            that may result from using the app or website. You are responsible
            for securing your device and data.
          </Text>

          <Text className="font-inter text-base font-bold mb-2">
            5. Changes to the Service
          </Text>
          <Text className="font-inter text-base mb-4">
            We may update, modify, or discontinue parts of the service at any
            time without prior notice. Updates to these Terms will be posted on
            this page.
          </Text>

          <Text className="font-inter text-base font-bold mb-2">
            6. Governing Law
          </Text>
          <Text className="font-inter text-base mb-4">
            These Terms are governed by the laws of India, without regard to
            conflict of law principles. Any disputes shall be resolved under the
            jurisdiction of the courts in India.
          </Text>

          <Text className="font-inter text-base font-bold mb-2">
            7. Contact Us
          </Text>
          <Text className="font-inter text-base">
            If you have questions about these Terms, reach us through our
            feedback form:
          </Text>
          <Text
            className="underline mb-4"
            onPress={() => router.push("https://forms.gle/6xkf5GbPMU5YvA1Q8")}
            accessible={true}
            accessibilityLabel="Open feedback form"
          >
            forms.gle/6xkf5GbPMU5YvA1Q8
          </Text>

          <Text className="text-gray-500 text-center font-inter text-sm mb-4">
            Vocabsaga &copy; {new Date().getFullYear()}
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
