import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Categories, { Records } from "../components/Categories";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import CTA from "../components/AppleCard/CTA";

const Browse = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text style={styles.heading}>Health Categories</Text>
        </View>

        <Categories />
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text style={styles.heading}>Health Records</Text>
        </View>
        <Records onPress={() => navigation.navigate("Info")} />
        <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
          <CTA label="Add account" name="arrow-right" size={20} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: { fontSize: 20, color: "#333", fontFamily: "Medium" },
});

export default Browse;
