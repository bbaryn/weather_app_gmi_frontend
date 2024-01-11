import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

import { weatherImages } from "../constants";
import { Weather } from "../types/Weather";

type WeatherInfoProps = {
  weather: Weather | null;
  temperature: string;
  info: string;
};

export const WeatherInfo = ({
  weather,
  temperature,
  info,
}: WeatherInfoProps) => (
  <View className="mx-4 flex justify-around flex-1 mb-2">
    <Text className="text-white text-center text-2xl font-bold">
      {weather?.name},
      <Text className="text-lg font-semibold text-gray-300">
        {" "}
        {weather?.sys.country}
      </Text>
    </Text>
    <View className="flex-row justify-center z-1">
      <Image
        source={
          weatherImages[
            weather?.weather[0].main || "other"
          ] as ImageSourcePropType
        }
        className="w-52 h-52"
      />
    </View>
    <View className="space-y-2">
      <Text className="text-center font-bold text-white text-6xl ml-5">
        {temperature}&#176; C
      </Text>
      <Text className="text-center text-white text-xl tracking-widest">
        {info}
      </Text>
    </View>
  </View>
);
