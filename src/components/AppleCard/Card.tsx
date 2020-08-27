import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");

interface Props {
  label: string;
  subLabel: string;
  time: number | string;
  count: string;
}

const Card = (props: Props) => {
  const { label, subLabel, time, count } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <MaterialCommunityIcons name="fire" size={24} color="#ff5722" />
          <Text style={styles.label}>{label}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={styles.time}>{time}</Text>
          <Feather
            name="arrow-right"
            size={14}
            color="#999"
            style={{ left: 2.5, top: 0.75 }}
          />
        </View>
      </View>
      <View style={styles.countView}>
        <Text style={styles.count}>{count}</Text>
        <Text style={styles.subLabel}>{subLabel}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    backgroundColor: "rgba(12, 13, 53, 0.05)",
    marginLeft: width * 0.035,
    marginRight: width * 0.035,
    borderRadius: 10,
    marginBottom: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: -5,
    marginBottom: 5,
  },
  label: {
    fontSize: 15,
    marginTop: 3,
    marginLeft: 3,
    fontFamily: "Regular",
  },
  time: {
    fontSize: 13.5,
    fontFamily: "Regular",
  },
  countView: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 20,
  },
  count: {
    color: "#333",
    fontSize: 25,
    fontFamily: "Medium",
  },
  subLabel: {
    color: "#999",
    fontSize: 15,
    fontFamily: "Regular",
    top: 10,
    left: 3,
  },
});
