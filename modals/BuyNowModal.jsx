import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BuyNowModal = ({ visible, closeModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Your purchase is confirmed!</Text>
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
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    fontSize: 16,
    color: "#007BFF",
  },
  okButton: {
    padding: 10,
  },
});

export default BuyNowModal;
