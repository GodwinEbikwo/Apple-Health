import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

interface Props {}

const StepsCard = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
        <Text style={{ color: "#3e64ff" }} onPress={() => alert("info")}>
          {" "}
          More about steps
        </Text>
      </Text>
    </View>
  );
};

export default StepsCard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "rgba(12, 13, 53, 0.05)",
    marginLeft: width * 0.035,
    marginRight: width * 0.035,
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  info: {
    color: "#333",
    fontFamily: "Regular",
    lineHeight: 22,
  },
});
