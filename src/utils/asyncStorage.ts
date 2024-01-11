import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log("Error storing value: ", error);
  }
};

export const getData = async (key: string) => {
  try {
    return AsyncStorage.getItem(key);
  } catch (error) {
    console.error("Error retrieving value: ", error);
  }
};
