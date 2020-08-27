import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Dimensions } from "react-native";
import SegmentedControl from "@react-native-community/segmented-control";
import FitChart from "../components/Graphs/FitChart";
import { sleepData, averageData } from "../components/data";
import FitLineChart from "../components/Graphs/FitLineChart";
import Contribution from "../components/Graphs/Contribution";
import { ScrollView } from "react-native-gesture-handler";
import HighlightOne from "../components";
import StepsCard from "../components/StepsCard";
import ChartHeaders from "../components/ChartHeaders";
import AppCard from "../components/AppCard";
import CTA from "../components/AppleCard/CTA";
import FooterCard from "../components/FooterCard";

const { width } = Dimensions.get("window");

interface Props {}

const Heading = ({ label }: { label: string }) => {
  return (
    <View style={{ marginHorizontal: 17 }}>
      <Text style={styles.subHeadings}>{label}</Text>
    </View>
  );
};

const Details = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: 350,
            backgroundColor: "rgba(12, 13, 53, 0.05)",
          }}
        >
          <SegmentedControl
            values={["D", "W", "M", "Y"]}
            style={{ height: 30, margin: 14 }}
            selectedIndex={selectedIndex}
            onChange={(event) => {
              setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
            }}
          />

          {selectedIndex === 0 && (
            <ChartHeaders count={"567"} date={"Today"}>
              <FitChart data={sleepData} />
            </ChartHeaders>
          )}
          {selectedIndex === 1 && (
            <ChartHeaders count={"6,567"} date={"23, August, 2020"}>
              <FitChart data={averageData} />
            </ChartHeaders>
          )}
          {selectedIndex === 2 && (
            <ChartHeaders count={"10,924"} date={"26/07/2020"}>
              <FitLineChart data={averageData} />
            </ChartHeaders>
          )}
          {selectedIndex === 3 && (
            <ChartHeaders count={"7,024"} date={"Last two months"}>
              <Contribution />
            </ChartHeaders>
          )}
        </View>

        <View style={styles.inner}>
          <Text style={styles.subHeadings}>Highlights</Text>
          <Button
            title="Show All"
            onPress={() => alert("not implemented yet")}
          />
        </View>
        <HighlightOne
          label={"Steps"}
          info={
            "You are averaging 1,243 fewer steps a day this month than last month"
          }
          distance="2,934"
          distanceTwo="1,124"
          subLabel="steps/day"
          date="This month"
          marginRight={width * 0.6}
          dateTwo="Last month"
          marginRightTwo={width * 0.65}
        />
        <HighlightOne
          label={"Steps"}
          info={
            "You are averaging 10,243 more steps a day this week than last week"
          }
          distance="4,934"
          distanceTwo="17,124"
          subLabel="steps/day"
          date="This week"
          marginRight={width * 0.4}
          dateTwo="Last week"
          marginRightTwo={width * 0.125}
        />

        <Heading label="About Steps" />
        <StepsCard />

        <Heading label="Steps Apps" />
        <AppCard />

        <Heading label="Options" />
        <CTA label={"Show All Health Data"} name={"star"} size={20} />

        <View
          style={{
            marginLeft: width * 0.045,
            marginRight: width * 0.035,
            marginTop: -16,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "#999", fontFamily: "Regular" }}>
            Steps will appear as a Favourite in Summary
          </Text>
        </View>
        <FooterCard />
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 30,
  },
  subHeadings: { fontFamily: "Medium", fontSize: 20, color: "#333" },
});
