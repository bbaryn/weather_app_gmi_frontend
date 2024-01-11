import { DEFAULT_LAT, DEFAULT_LON } from "@env";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { fetchLocations, fetchWeather } from "../api/weather";
import { Loading } from "../components/Loading";
import { SearchBar } from "../components/SearchBar";
import { WeatherInfo } from "../components/WeatherInfo";
import { WeatherStats } from "../components/WeatherStats";
import { Location } from "../types/Location";
import { Weather } from "../types/Weather";
import { getData, storeData } from "../utils/asyncStorage";

export default function HomeScreen() {
  const [showSearch, toggleSearch] = useState(false);
  const [locationList, setLocationList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState<Weather | null>(null);

  const handleSearch = (search: string) => {
    if (search && search?.length > 2) {
      fetchLocations({ cityName: search }).then((data) => {
        setLocationList(data);
      });
    }
  };

  const handleLocation = (location: Location) => {
    setLoading(true);
    toggleSearch(false);
    setLocationList([]);
    fetchWeather({
      lat: location.lat,
      lon: location.lon,
    }).then((data) => {
      setLoading(false);
      setWeather(data);
      storeData("chosenCity", JSON.stringify(location));
    });
  };

  useEffect(() => {
    fetchMyWeatherData();
  }, []);

  const fetchMyWeatherData = async () => {
    const chosenCity = await getData("chosenCity");
    if (chosenCity) {
      const parsedChosenCity = JSON.parse(chosenCity);

      fetchWeather({
        lat: parsedChosenCity.lat,
        lon: parsedChosenCity.lon,
      }).then((data) => {
        setWeather(data);
        setLoading(false);
      });
    } else {
      fetchWeather({
        lat: DEFAULT_LAT,
        lon: DEFAULT_LON,
      }).then((data) => {
        setWeather(data);
        setLoading(false);
      });
    }
  };

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../assets/images/bg.png")}
        className="absolute w-full h-full"
      />
      {loading ? (
        <Loading />
      ) : (
        <SafeAreaView className="flex flex-1">
          <View className="mx-4 relative z-10">
            <SearchBar
              showSearch={showSearch}
              handleSearch={handleSearch}
              toggleSearch={toggleSearch}
              locationList={locationList}
              handleLocation={handleLocation}
            />
          </View>
          <View className="mx-4 flex justify-around flex-1 mb-2">
            <WeatherInfo
              weather={weather}
              temperature={weather?.main.temp ?? ""}
              info={weather?.weather[0].main ?? ""}
            />
            <WeatherStats
              wind={weather?.wind.speed ?? ""}
              humidity={weather?.main.humidity ?? ""}
              pressure={weather?.main.pressure ?? ""}
            />
          </View>
        </SafeAreaView>
      )}
    </View>
  );
}
