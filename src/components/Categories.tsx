import React from "react";
import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { DATA, RDATA } from "./data";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width } = Dimensions.get("window");

interface Props {
  label: string;
  iconName: string;
  color: string;
}

const Content = ({ label, iconName, color }: Props) => {
  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Ionicons name={iconName} size={26} color={color} />
        <Text style={styles.label}>{label}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Feather
          name="arrow-right"
          size={20}
          color="#bbbbbb"
          style={{ left: 2.5, top: 0.75 }}
        />
      </View>
    </View>
  );
};

const Categories = () => {
  const renderItem = ({ item }: { item: any }) => (
    <Content label={item.label} iconName={item.iconName} color={item.color} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export const Records = ({ onPress }: { onPress: () => void }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={RDATA}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.8} key={item.id} onPress={onPress}>
            <Content
              label={item.label}
              iconName={item.iconName}
              color={item.color}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "rgba(12, 13, 53, 0.05)",
    marginLeft: width * 0.04,
    marginRight: width * 0.04,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 6,
    marginBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#bbbbbb",
  },
  label: {
    fontSize: 17,
    marginTop: 3,
    marginLeft: 10,
    fontFamily: "Regular",
    marginBottom: 10,
    color: "#333",
  },
});
