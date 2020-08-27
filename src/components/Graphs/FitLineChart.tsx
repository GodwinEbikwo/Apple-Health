import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

interface FitLineDataSets {
  data: number[];
}

interface FitLineData {
  labels: string[];
  datasets: FitLineDataSets[];
}

interface FitLineChartProps {
  data: FitLineData;
  title?: string;
  description?: string;
}
const FitLineChart = (props: FitLineChartProps) => {
  const { data, title, description } = props;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingLeft: 20 }}>
        <Text
          style={{
            color: "#333",
            fontSize: 18,
            marginBottom: 5,
            fontFamily: "Medium",
          }}
        >
          {title}
        </Text>
        {description && (
          <Text
            style={{
              color: "#9a9ba1",
              fontSize: 15,
              marginBottom: 17,
              fontFamily: "Regular",
            }}
          >
            {description}
          </Text>
        )}
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LineChart
          data={data}
          style={{
            marginVertical: 10,
            borderRadius: 5,
          }}
          width={Dimensions.get("window").width - 40}
          height={220}
          yAxisLabel={""}
          chartConfig={{
            backgroundColor: "#f1f1f1",
            backgroundGradientFrom: "#f1f1f1",
            backgroundGradientTo: "#f1f1f1",
            color: (opacity = 1) => `rgba(${154}, ${155}, ${155}, ${opacity})`,
            labelColor: (opacity = 1) =>
              `rgba(${54}, ${55}, ${61}, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
        />
      </View>
    </View>
  );
};

export default FitLineChart;
