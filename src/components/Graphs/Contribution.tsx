import React from "react";
import { View, Dimensions } from "react-native";
import { ContributionGraph } from "react-native-chart-kit";

const commitsData = [
  { date: "2017-01-02", count: 100 },
  { date: "2017-01-03", count: 200 },
  { date: "2017-01-04", count: 300 },
  { date: "2017-01-05", count: 100 },
  { date: "2017-01-06", count: 500 },
  { date: "2017-01-30", count: 200 },
  { date: "2017-01-31", count: 300 },
  { date: "2017-03-4", count: 430 },
  { date: "2017-04-10", count: 400 },
  { date: "2017-05-02", count: 20 },
  { date: "2017-05-13", count: 420 },
  { date: "2017-06-25", count: 230 },
  { date: "2017-07-12", count: 430 },
  { date: "2017-08-23", count: 230 },
  { date: "2017-03-05", count: 650 },
  { date: "2017-02-30", count: 400 },
];

const Contribution = () => {
  return (
    <View style={{ flex: 1 }}>
      <ContributionGraph
        values={commitsData}
        endDate={new Date("2017-06-25")}
        numDays={110}
        width={Dimensions.get("screen").width - 10}
        height={220}
        chartConfig={{
          backgroundGradientFrom: "#f1f1f1",
          backgroundGradientTo: "#f1f1f1",
          fillShadowGradientOpacity: 1,
          color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`,
        }}
      />
    </View>
  );
};

export default Contribution;
