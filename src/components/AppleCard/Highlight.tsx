import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
const { width } = Dimensions.get("window");

interface Props {
  label: string;
  info: string;
  distance?: number | string;
  subLabel: string;
  date?: string;
}

const Highlight = (props: Props) => {
  const { label, info, distance, subLabel, date } = props;
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

      <Data distance={distance} subLabel={subLabel} date={date} />
      <Data2 distance="1335" subLabel="steps/day" date={date} />
    </View>
  );
};

const Data = ({ distance, subLabel, date }: any) => {
  return (
    <>
      <View style={styles.countView}>
        <Text style={styles.count}>{distance}</Text>
        <Text style={styles.subLabel}>{subLabel}</Text>
      </View>
      <View style={styles.dateView}>
        <Text style={{ color: "#fff", fontFamily: "Medium" }}>{date}</Text>
      </View>
    </>
  );
};

const Data2 = ({ distance, subLabel, date }: any) => {
  return (
    <>
      <View style={styles.countView}>
        <Text style={styles.count}>{distance}</Text>
        <Text style={styles.subLabel}>{subLabel}</Text>
      </View>
      <View style={styles.dateView2}>
        <Text style={{ color: "#333", fontFamily: "Medium" }}>{date}</Text>
      </View>
    </>
  );
};

export default Highlight;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(12, 13, 53, 0.05)",
    paddingVertical: 20,
    marginLeft: width * 0.035,
    marginRight: width * 0.035,
    borderRadius: 10,
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
    width: width - 90,
    marginTop: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#999",
  },
  info: {
    bottom: 5,
    lineHeight: 22,
    fontFamily: "Regular",
    color: "#333",
  },
  countView: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 12,
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
  dateView: {
    marginLeft: width * 0.045,
    marginRight: width * 0.05,
    paddingVertical: 3,
    paddingLeft: 5,
    backgroundColor: "#ff5722",
    marginTop: 3,
    borderRadius: 3,
  },
  dateView2: {
    marginLeft: width * 0.045,
    marginRight: width * 0.5,
    paddingVertical: 3,
    paddingLeft: 5,
    backgroundColor: "rgb(255, 195, 176)",
    marginTop: 3,
    borderRadius: 3,
  },
});
