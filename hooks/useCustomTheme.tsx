import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

const useCustomTheme = () => {
  const colorScheme = useColorScheme();
  const scheme = colorScheme ?? "light";
  const theme = Colors[scheme];

  return theme;
};

export default useCustomTheme;
