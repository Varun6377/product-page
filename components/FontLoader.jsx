import { useFonts } from "expo-font";

const FontLoader = ({ children }) => {
  const [loaded] = useFonts({
    Outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    Lato: require("../assets/fonts/Lato-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return children;
};

export default FontLoader;
