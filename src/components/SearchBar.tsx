import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { debounce } from "lodash";
import React, { Dispatch, SetStateAction, useCallback } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { Location } from "../types/Location";

type SearchBarProps = {
  showSearch: boolean;
  handleSearch: (search: string) => void;
  toggleSearch: Dispatch<SetStateAction<boolean>>;
  locationList: Location[];
  handleLocation: (location: Location) => void;
};

export const SearchBar = ({
  showSearch,
  handleSearch,
  toggleSearch,
  locationList,
  handleLocation,
}: SearchBarProps) => {
  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  return (
    <View
      className="flex-row justify-end items-center rounded-full"
      style={{
        backgroundColor: showSearch ? "rgba(255,255,255,0.2)" : "transparent",
      }}
    >
      {showSearch ? (
        <TextInput
          onChangeText={handleTextDebounce}
          placeholder="Search city"
          placeholderTextColor="lightgray"
          className="pl-6 h-10 pb-1 flex-1 text-base text-white"
        />
      ) : null}
      <TouchableOpacity
        onPress={() => toggleSearch(!showSearch)}
        className="rounded-full p-3 m-1"
        style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
      >
        {showSearch ? (
          <AntDesign name="close" size={24} color="black" />
        ) : (
          <Entypo name="magnifying-glass" size={24} color="black" />
        )}
      </TouchableOpacity>
      {locationList?.length > 0 && showSearch ? (
        <View className="absolute w-full bg-gray-300 top-16 rounded-3xl ">
          {locationList.map((location, index) => {
            let showBorder = index + 1 != locationList?.length;
            let borderClass = showBorder ? " border-b-2 border-b-gray-400" : "";
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleLocation(location)}
                className={
                  "flex-row items-center border-0 p-3 px-4 mb-1 " + borderClass
                }
              >
                <Feather name="map-pin" size={24} color="black" />
                <Text className="text-black text-lg ml-2">
                  {location.name}, {location.state}, {location.country}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : null}
    </View>
  );
};
