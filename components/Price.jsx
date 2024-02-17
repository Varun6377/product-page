import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Price() {
  return (
    <View style={styles.priceContainer}>
      <View>
        <Text style={styles.priceText}>$ 450.55</Text>
      </View>
      <View style={styles.deliveryContainer}>
        <Text style={styles.deliveryText}>Get it by 3rd March *Standard</Text>
        <Text style={styles.addressText}>Deliver to Lewes19958</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 10,
  },
  priceText: {
    fontSize: 40,
    fontWeight: "500",
    fontFamily: "Outfit",
    marginRight: 40,
  },
  deliveryContainer: {
    flex: 1,
    marginBottom: 30,
  },
  deliveryText: {
    marginTop: 9,
    marginRight: 10,
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 8,
    fontFamily: "Lato",
  },
  addressText: {
    fontFamily: "Lato",
    fontSize: 11,
    marginLeft: 75,
    marginTop: 3,
  },
});
