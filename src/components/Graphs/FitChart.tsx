import React from "react";
import { View, Dimensions, Text } from "react-native";
import { BarChart } from "react-native-chart-kit";

const screen = Dimensions.get("window");

interface FitDataSets {
  data: number[];
}

interface FitChartData {
  labels: string[];
  datasets: FitDataSets[];
}

interface FitChartProps {
  data: FitChartData;
  title?: string;
  description?: string;
  baseline?: number;
}

const FitChart = (props: FitChartProps) => {
  const { data, title, description, baseline } = props;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingLeft: 20 }}>
        <Text
          style={{
            color: "#333",
            fontSize: 20,
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
              marginBottom: 20,
              marginTop: 10,
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
        <BarChart
          yAxisSuffix=""
          data={data}
          width={Dimensions.get("window").width - 10}
          height={220}
          yAxisLabel="🏃"
          chartConfig={{
            backgroundGradientFrom: "#f1f1f1",
            backgroundGradientTo: "#f1f1f1",
            fillShadowGradientOpacity: 1,
            color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`,
            labelColor: (opacity = 1) =>
              `rgba(${54}, ${55}, ${61}, ${opacity})`,
            barPercentage: 0.5,
            decimalPlaces: 0,
          }}
          showBarTops={false}
          fromZero
        />
      </View>
    </View>
  );
};

export default FitChart;
