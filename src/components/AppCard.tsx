import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");

interface Props {
  uri: string;
  title: string;
  subTitle: string;
}

const Content = ({ uri, title, subTitle }: Props) => {
  return (
    <>
      <View style={styles.footerBlur}>
        <Image
          source={{
            uri: uri,
          }}
          style={{ width: 50, height: 50, borderRadius: 11 }}
        />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.timeText}>{title}</Text>
          <Text style={styles.subtimeText}>{subTitle} </Text>
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            flex: 1,
          }}
        >
          <MaterialCommunityIcons
            name="information-outline"
            size={24}
            color="#999"
          />
        </View>
      </View>
    </>
  );
};

const AppCard = () => {
  return (
    <View style={styles.container}>
      <Content
        uri={
          "https://res.cloudinary.com/dqv9mfbvt/image/upload/v1595331272/romantic-relationships_khtt0s.png"
        }
        title="Pedometer++"
        subTitle="Horizon training limited LLC"
      />
      <Content
        uri={
          "https://res.cloudinary.com/dqv9mfbvt/image/upload/v1595331534/abstract-co-workers_hmsh88.png"
        }
        title="RunKeeper- GPS Running Tracker"
        subTitle="Fitness Keeper Inc"
      />
      <Content
        uri={
          "https://res.cloudinary.com/dqv9mfbvt/image/upload/v1595331797/friendship_jwuewm.png"
        }
        title="adidas- Runtastic Running App"
        subTitle="adidas"
      />
    </View>
  );
};

export default AppCard;

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: "rgba(12, 13, 53, 0.05)",
    marginLeft: width * 0.035,
    marginRight: width * 0.035,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  footerBlur: {
    flexDirection: "row",
    height: 80,
    width: "100%",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#999",
    marginBottom: 10,
  },
  timeText: {
    marginLeft: 3,
    marginTop: 7,
    color: "#333",
    fontSize: 15,
    fontFamily: "Regular",
  },
  subtimeText: {
    marginLeft: 3,
    marginTop: 2,
    color: "#999",
    fontSize: 13,
    fontFamily: "Regular",
  },
});
