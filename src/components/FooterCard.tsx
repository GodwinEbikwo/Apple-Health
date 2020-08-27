import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

interface Props {
  label: string;
}

const Content = (props: Props) => {
  const { label } = props;
  return (
    <View style={styles.content}>
      <Text style={styles.label}>{label}</Text>
      <Feather name="arrow-right" size={18} color="#999" />
    </View>
  );
};

const FooterCard = () => {
  return (
    <View style={styles.container}>
      <Content label="Show All data" />
      <View style={styles.divider} />
      <Content label="Data Sources and Access" />
    </View>
  );
};

export default FooterCard;

const styles = StyleSheet.create({
  container: {
    padding: 13,
    backgroundColor: "rgba(12, 13, 53, 0.05)",
    marginLeft: width * 0.035,
    marginRight: width * 0.035,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    padding: 5,
  },
  label: { fontSize: 16, fontFamily: "Regular", color: "#333" },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#bbbbbb",
  },
});
