import React from "react";
import { View } from "react-native";
import * as Progress from "react-native-progress";

export const Loading = () => (
  <View className="flex-1 flex-row justify-center items-center">
    <Progress.CircleSnail thickness={10} size={140} color="#0bb3b2" />
  </View>
);
