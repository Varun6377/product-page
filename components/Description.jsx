import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Description() {
  return (
    <View style={styles.productDescription}>
      <Text style={styles.title}>Product Description</Text>
      <Text style={styles.descriptionText}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  productDescription: {
    marginTop: 20,
    margin: 10,
    padding: 10,
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 8,
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
    fontFamily: "Outfit",
  },
  descriptionText: {
    fontSize: 25,
    fontFamily: "Lato",
  },
});
