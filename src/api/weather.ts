import { API_KEY, BACKEND_URL } from "@env";
import axios from "axios";

const instance = axios.create({
  baseURL: BACKEND_URL,
  timeout: 10000,
  headers: {
    "x-api-key": API_KEY,
    Accept: "application/json",
  },
});

const apiCall = async (endpoint: string) => {
  try {
    const response = await instance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("error: ", error);
  }
};

export const fetchWeather = (params: { lat: string; lon: string }) =>
  apiCall(`/weather/forecast?lat=${params.lat}&lon=${params.lon}`);

export const fetchLocations = (params: { cityName: string }) =>
  apiCall(`/weather/location-list?location=${params.cityName}`);
