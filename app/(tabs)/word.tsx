import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Word() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-white">Word</Text>
      <Link href={`/story`}>Story</Link>
    </View>
  );
}
