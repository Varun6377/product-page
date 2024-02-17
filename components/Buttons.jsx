import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CartModal from "../modals/CartModal";
import BuyNowModal from "../modals/BuyNowModal";

export default function Buttons() {
  const [quantity, setQuantity] = useState(0);
  const [cartEmpty, setCartEmpty] = useState(false);
  const [alreadyInCart, setAlreadyInCart] = useState(false);
  const [bought, setBought] = useState(false);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setAlreadyInCart(false);
      setQuantity(quantity - 1);
    } else {
      setCartEmpty(true);
    }
  };

  const addToCart = () => {
    if (quantity === 0) {
      setQuantity(1);
    } else {
      setAlreadyInCart(true);
      // setCartEmpty(true);
    }
  };

  const buyNow = () => {
    if (quantity > 0) {
      setQuantity(0);
      setBought(true);
    } else {
      setCartEmpty(true);
    }
  };

  return (
    <View>
      <View style={styles.buttonsContainer}>
        <View style={styles.itemsButton}>
          <TouchableOpacity onPress={increaseQuantity}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={decreaseQuantity}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
          <Text style={styles.buttonText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={buyNow} style={styles.buyNowButton}>
        <Text style={styles.buyNowText}>BUY NOW</Text>
      </TouchableOpacity>

      <CartModal
        visible={cartEmpty ? cartEmpty : alreadyInCart}
        cartEmpty={cartEmpty}
        alreadyInCart={alreadyInCart}
        closeModal={
          cartEmpty ? () => setCartEmpty(false) : () => setAlreadyInCart(false)
        }
      />

      <BuyNowModal visible={bought} closeModal={() => setBought(false)} />

      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
  },
  itemsButton: {
    marginHorizontal: 11,
    alignItems: "center",
    padding: 4,
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "Outfit",
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 20,
    fontFamily: "Outfit",
  },
  addToCartButton: {
    justifyContent: "center",
    paddingHorizontal: 75,
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 8,
  },
  buyNowButton: {
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 4,
    backgroundColor: "#D4AF37",
    borderWidth: 1.2,
    borderRadius: 8,
  },
  buyNowText: {
    fontFamily: "Outfit",
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    padding: 7,
  },
  separator: {
    height: 1,
    backgroundColor: "#f4f4f4",
    marginHorizontal: 10,
    marginTop: 10,
  },
});
