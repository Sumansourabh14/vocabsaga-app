import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function TermsOfUse() {
  return (
    <ScrollView className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold mb-4">Terms of Use</Text>
      <Text className="text-sm text-gray-700 mb-6">
        Last updated: August 29, 2025
      </Text>

      <View className="space-y-4">
        <View>
          <Text className="text-lg font-semibold mb-2">
            1. Acceptance of Terms
          </Text>
          <Text className="text-base text-gray-700">
            By using Vocabsaga, you agree to these Terms of Use and our Privacy
            Policy. If you do not agree, please discontinue using our services.
          </Text>
        </View>

        <View>
          <Text className="text-lg font-semibold mb-2">2. Use of the App</Text>
          <Text className="text-base text-gray-700">
            Vocabsaga is provided for educational and personal use only. You
            agree not to misuse the platform, including but not limited to
            attempting to reverse-engineer, exploit, or harm the app in any way.
          </Text>
        </View>

        <View>
          <Text className="text-lg font-semibold mb-2">3. Accounts</Text>
          <Text className="text-base text-gray-700">
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities under your account.
          </Text>
        </View>

        <View>
          <Text className="text-lg font-semibold mb-2">
            4. Intellectual Property
          </Text>
          <Text className="text-base text-gray-700">
            All content, design, and features in Vocabsaga are owned by us or
            our licensors. You may not copy, distribute, or use our intellectual
            property without permission.
          </Text>
        </View>

        <View>
          <Text className="text-lg font-semibold mb-2">
            5. Limitation of Liability
          </Text>
          <Text className="text-base text-gray-700">
            Vocabsaga is provided &quot;as is&quot; without warranties of any
            kind. We are not liable for damages or losses arising from your use
            of the platform.
          </Text>
        </View>

        <View>
          <Text className="text-lg font-semibold mb-2">
            6. Changes to Terms
          </Text>
          <Text className="text-base text-gray-700">
            We may update these Terms of Use from time to time. Continued use of
            the app after changes means you accept the new terms.
          </Text>
        </View>

        <View>
          <Text className="text-lg font-semibold mb-2">7. Governing Law</Text>
          <Text className="text-base text-gray-700">
            These Terms of Use are governed by the laws of India. Any disputes
            will be handled in the appropriate courts located in India.
          </Text>
        </View>

        <View>
          <Text className="text-lg font-semibold mb-2">8. Contact Us</Text>
          <Text className="text-base text-gray-700">
            For any questions regarding these Terms of Use, please contact us
            at: vocabsaga.space@gmail.com or sumsourabh14@gmail.com
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
