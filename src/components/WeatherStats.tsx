import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

type WeatherStatsProps = {
  wind: string;
  humidity: string;
  pressure: string;
};

export const WeatherStats = ({
  wind,
  humidity,
  pressure,
}: WeatherStatsProps) => (
  <View className="flex-row justify-between mx-4">
    <View className="flex-row space-x-2 items-center">
      <Image source={require("../assets/icons/wind.png")} className="w-6 h-6" />
      <Text className="text-white font-semibold text-base">{wind} km</Text>
    </View>
    <View className="flex-row space-x-2 items-center">
      <Image source={require("../assets/icons/drop.png")} className="w-6 h-6" />
      <Text className="text-white font-semibold text-base">{humidity} %</Text>
    </View>
    <View className="flex-row space-x-2 items-center">
      <Entypo name="gauge" size={24} color="white" />
      <Text className="text-white font-semibold text-base">{pressure} hPa</Text>
    </View>
  </View>
);
