import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Bookmarks() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Bookmarks</Text>
      <Link href={`/story`}>Story</Link>
    </View>
  );
}
