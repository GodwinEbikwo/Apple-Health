import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  count: string | number;
  date: string | number;
  children: ReactNode;
}

const ChartHeaders = (props: Props) => {
  const { children, date, count } = props;
  return (
    <>
      <View style={{ marginHorizontal: 18 }}>
        <Text style={styles.header}>Total</Text>
        <View style={styles.countView}>
          <Text style={styles.count}>{count}</Text>
          <Text style={styles.subLabel}>steps</Text>
        </View>
        <Text style={styles.footer}>{date}</Text>
        {children}
      </View>
    </>
  );
};

export default ChartHeaders;

const styles = StyleSheet.create({
  header: {
    textTransform: "uppercase",
    color: "#999",
    marginBottom: 3,
    fontFamily: "Medium",
  },
  countView: {
    flexDirection: "row",
    marginBottom: 3,
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
  footer: {
    color: "#999",
    marginBottom: 5,
    fontFamily: "Medium",
  },
});
