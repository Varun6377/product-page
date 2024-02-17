import { StyleSheet, Text, Image, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        New Deer Upholstered Barrel{"\n"}Chair
      </Text>
      <View style={styles.authorContainer}>
        <Image
          source={require("../assets/challenge profile image.png")}
          style={styles.authorImage}
        />
        <View style={styles.authorInfo}>
          <Text style={styles.authorText}>by</Text>
          <Text style={styles.authorTextBold}> Sand and Stable</Text>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <Image source={require("../assets/Rating.png")} />
        <Text style={styles.ratingText}>3/5 (See 24 reviews)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 80,
    marginLeft: 10,
  },
  headerText: {
    fontFamily: "Outfit",
    fontSize: 25,
    marginBottom: 2,
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorImage: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderRadius: 25 / 2,
    marginRight: 8,
    resizeMode: "contain",
  },
  authorInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorText: {
    fontFamily: "Lato",
    fontSize: 15,
  },
  authorTextBold: {
    fontSize: 15,
    fontFamily: "Lato",
    fontWeight: "700",
    fontStyle: "italic",
  },
  ratingContainer: {
    flexDirection: "row",
    marginVertical: 25,
    alignItems: "center",
  },
  ratingText: {
    fontFamily: "Outfit",
    marginLeft: 5,
  },
});
