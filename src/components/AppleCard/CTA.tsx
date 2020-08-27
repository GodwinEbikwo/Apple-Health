import React, { ReactNode } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
const { width } = Dimensions.get("window");

interface Props {
  label: string;
  name: string;
  size?: number | 16;
}

const CTA = (props: Props) => {
  const { label, name, size } = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.label}>{label}</Text>
        <Feather
          name={name}
          size={size}
          color="#999"
          style={{ left: 2.5, top: 0.75 }}
        />
      </View>
    </View>
  );
};

export default CTA;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "rgba(12, 13, 53, 0.05)",
    marginLeft: width * 0.035,
    marginRight: width * 0.035,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 5,
  },
  label: {
    fontSize: 15,
    color: "#ff5722",
    fontFamily: "Regular",
  },
});
