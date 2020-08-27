import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import FitLineChart from "../Graphs/FitLineChart";
import { sleepData } from "../data";
const { width } = Dimensions.get("window");

interface Props {
  label: string;
  info: string;
}

const Graph = (props: Props) => {
  const { label, info } = props;
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
          <Feather
            name="arrow-right"
            size={14}
            color="#999"
            style={{ left: 2.5, top: 0.75 }}
          />
        </View>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.info}>{info}</Text>
      </View>

      <FitLineChart data={sleepData} />
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(12, 13, 53, 0.05)",
    paddingVertical: 20,
    marginLeft: width * 0.035,
    marginRight: width * 0.035,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
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
    marginTop: 4,
    marginLeft: 2,
    color: "#ff5722",
    fontFamily: "Regular",
    marginBottom: 4,
  },
  infoView: {
    marginHorizontal: 18,
    width: width - 110,
    marginTop: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#999",
  },
  info: {
    bottom: 5,
    fontFamily: "Regular",
    color: "#333",
  },
});
