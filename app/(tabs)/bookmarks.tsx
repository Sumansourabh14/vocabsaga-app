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
      <Text className="text-3xl text-white font-bold">Bookmarks</Text>
      <Link href={`/story`} className="underline text-white">
        Story
      </Link>
    </View>
  );
}
