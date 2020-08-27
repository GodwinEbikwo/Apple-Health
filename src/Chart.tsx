import React, { useEffect, useState } from "react";
import { Text, View, Dimensions, ScrollView, StyleSheet } from "react-native";
import Card from "./components/AppleCard/Card";
import CTA from "./components/AppleCard/CTA";
import Highlight from "./components/AppleCard/Highlight";
import Graph from "./components/AppleCard/Graph";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

const Chart = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingTop: 20 }}>
        <View style={styles.subHeading}>
          <Text style={styles.headerText}>Favourites</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("Details");
          }}
        >
          <Card
            label={"Steps"}
            time={"10:50"}
            count={"1249"}
            subLabel={"steps"}
          />
        </TouchableOpacity>

        <CTA label={"Show All Health Data"} name={"arrow-right"} size={16} />

        <Highlight
          label={"Walking + Running Distance"}
          info={
            "On average, you are walking and running distance last week was more than the week before"
          }
          distance="5.1"
          subLabel="km/day"
          date="Week of 17 August"
        />

        <Graph
          label={"Running"}
          info={"So far, you don dey run really well oh1 O boy keep am up!"}
        />
      </ScrollView>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  sumarryInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: width * 0.075,
    marginRight: width * 0.075,
    marginBottom: width * 0.05,
  },
  subHeading: {
    marginHorizontal: 21,
    marginBottom: 5,
  },
  headerText: {
    color: "#333",
    fontSize: 20,
    fontFamily: "Regular",
  },
});
