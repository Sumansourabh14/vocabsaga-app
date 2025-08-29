import BackBtn from "@/components/iconButtons/BackBtn";
import ScreenTitle from "@/components/text/ScreenTitle";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TermsOfUse() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="mt-4">
        <View className="flex-1 px-6">
          <View className="mt-4">
            <BackBtn />
          </View>
          <ScreenTitle title="Terms of Use" />

          <Text className="text-sm text-gray-700 mt-4 mb-4 font-inter">
            Last updated: August 29, 2025
          </Text>

          <View>
            <View className="mb-4">
              <Text className="text-lg mb-2 font-interBold">
                1. Acceptance of Terms
              </Text>
              <Text className="text-base text-gray-700 font-inter">
                By using Vocabsaga, you agree to these Terms of Use and our
                Privacy Policy. If you do not agree, please discontinue using
                our services.
              </Text>
            </View>

            <View className="mb-4">
              <Text className="text-lg font-interBold mb-2">
                2. Use of the App
              </Text>
              <Text className="text-base text-gray-700 font-inter">
                Vocabsaga is provided for educational and personal use only. You
                agree not to misuse the platform, including but not limited to
                attempting to reverse-engineer, exploit, or harm the app in any
                way.
              </Text>
            </View>

            <View className="mb-4">
              <Text className="text-lg mb-2 font-interBold">3. Accounts</Text>
              <Text className="text-base text-gray-700 font-inter">
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities under your account.
              </Text>
            </View>

            <View className="mb-4">
              <Text className="text-lg font-interBold mb-2">
                4. Intellectual Property
              </Text>
              <Text className="text-base text-gray-700 font-inter">
                All content, design, and features in Vocabsaga are owned by us
                or our licensors. You may not copy, distribute, or use our
                intellectual property without permission.
              </Text>
            </View>

            <View className="mb-4">
              <Text className="text-lg font-interBold mb-2">
                5. Limitation of Liability
              </Text>
              <Text className="text-base text-gray-700 font-inter">
                Vocabsaga is provided &quot;as is&quot; without warranties of
                any kind. We are not liable for damages or losses arising from
                your use of the platform.
              </Text>
            </View>

            <View className="mb-4">
              <Text className="text-lg font-interBold mb-2">
                6. Changes to Terms
              </Text>
              <Text className="text-base text-gray-700 font-inter">
                We may update these Terms of Use from time to time. Continued
                use of the app after changes means you accept the new terms.
              </Text>
            </View>

            <View className="mb-4">
              <Text className="text-lg font-interBold mb-2">
                7. Governing Law
              </Text>
              <Text className="text-base text-gray-700 font-inter">
                These Terms of Use are governed by the laws of India. Any
                disputes will be handled in the appropriate courts located in
                India.
              </Text>
            </View>

            <View className="mb-4">
              <Text className="text-lg font-interBold mb-2">8. Contact Us</Text>
              <Text className="text-base text-gray-700 font-inter">
                For any questions regarding these Terms of Use, please contact
                us at: vocabsaga.space@gmail.com or sumsourabh14@gmail.com
              </Text>
            </View>

            <Text className="text-gray-500 text-center font-inter text-sm mb-4">
              Vocabsaga &copy; {new Date().getFullYear()}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
