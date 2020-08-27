import { StatusBar } from "expo-status-bar";
import React from "react";
import LoadAssets from "./src/components/LoadAssets";
import Application from "./src/routes";

const fonts = {
  Bold: require("./assets/fonts/DMSans-Bold.ttf"),
  Medium: require("./assets/fonts/DMSans-Medium.ttf"),
  Regular: require("./assets/fonts/DMSans-Regular.ttf"),
};

export default function App() {
  return (
    <LoadAssets fonts={fonts}>
      <StatusBar style="auto" />
      <Application />
    </LoadAssets>
  );
}
