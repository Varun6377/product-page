import { View } from "react-native";
import FontLoader from "./components/FontLoader";
import Header from "./components/Header";
import Product from "./components/Product";
import Price from "./components/Price";
import Buttons from "./components/Buttons";
import Description from "./components/Description";

export default function App() {
  return (
    <FontLoader>
      <View>
        <Header />
        <Product />
        <Price />
        <Buttons />
        <Description />
      </View>
    </FontLoader>
  );
}
