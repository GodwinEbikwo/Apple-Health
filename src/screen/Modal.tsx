import React from "react";
import { View, Text } from "react-native";

interface Props {}

const Modal = (props: Props) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>Hi I am a modal</Text>
    </View>
  );
};

export default Modal;
