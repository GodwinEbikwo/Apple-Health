import React from "react";
import { Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { enableScreens } from "react-native-screens";
import Chart from "../Chart";
import Details from "../screen/Details";
import Browse from "../screen/Browse";
import Modal from "../screen/Modal";
import Info from "../screen/Info";

enableScreens();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const BrowseStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerLargeTitle: true,
      headerTranslucent: "true",
      headerStyle: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
      },
    }}
  >
    <HomeStack.Screen name="Summary" component={Chart} />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={{
        headerLargeTitle: false,
        headerRight: () => {
          return (
            <Button
              title="Add data"
              onPress={() => alert("not implemented ")}
            />
          );
        },
      }}
    />
  </HomeStack.Navigator>
);
const BrowseStackScreen = () => (
  <BrowseStack.Navigator
    initialRouteName="Browse"
    screenOptions={{
      headerLargeTitle: true,
      headerTranslucent: "true",
      headerStyle: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
      },
    }}
  >
    <BrowseStack.Screen name="Browse" component={Browse} />
    <BrowseStack.Screen name="Info" component={Info} />
    <BrowseStack.Screen
      name="Modal"
      component={Modal}
      options={{
        stackPresentation: "formSheet",
      }}
    />
  </BrowseStack.Navigator>
);

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }: { route: any }) => ({
        tabBarIcon: ({ color }: { color: string }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "heart";
          }
          if (route.name === "Browse") {
            iconName = "setting";
          }

          return <AntDesign name={iconName} size={26} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#FF5722",
        inactiveTintColor: "grey",
        style: {
          backgroundColor: "rgba(12, 13, 53, 0.05)",
          borderTopColor: "#1c1c1e",
          padding: 5,
          fontFamily: "Regular",
        },
      }}
    >
      <Tab.Screen name="Home" children={() => <HomeStackScreen />} />
      <Tab.Screen name="Browse" children={() => <BrowseStackScreen />} />
    </Tab.Navigator>
  );
};

const Application = () => {
  return <AppNavigator />;
};

export default Application;
