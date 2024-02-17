import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CartModal = ({ visible, alreadyInCart, closeModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {alreadyInCart ? (
            <Text style={styles.modalText}>Already added to Cart.</Text>
          ) : (
            <Text style={styles.modalText}>Cart is empty.</Text>
          )}
          <TouchableOpacity onPress={closeModal}>
            <View style={styles.okButton}>
              <Text style={styles.modalButton}>OK</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#D4AF37",
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    marginTop: 20,
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    marginBottom: 10,
    fontSize: 16,
    color: "#007BFF",
  },
  okButton: {
    padding: 10,
  },
});

export default CartModal;
