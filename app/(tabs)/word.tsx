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
      <Text>Word</Text>
      <Link href={`/story`}>Story</Link>
    </View>
  );
}
