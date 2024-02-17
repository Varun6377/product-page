import { StyleSheet, Image, ScrollView } from "react-native";

export default function Product() {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{}}
      showsHorizontalScrollIndicator={false}
    >
      <Image
        style={styles.productImage}
        source={require("../assets/product/challenge image (1).webp")}
      />
      <Image
        style={styles.productImage}
        source={require("../assets/product/challenge image (2).webp")}
      />
      <Image
        style={styles.productImage}
        source={require("../assets/product/challenge image (3).webp")}
      />
      <Image
        style={styles.productImage}
        source={require("../assets/product/challenge image (4).webp")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  productImage: {
    width: 193,
    height: 163,
    marginHorizontal: 8,
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: "#D4AF37",
    borderRadius: 8,
  },
});
