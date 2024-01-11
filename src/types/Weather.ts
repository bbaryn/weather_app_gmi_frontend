export type Weather = {
  main: {
    temp: string;
    feelsLike: string;
    tempMin: string;
    tempMax: string;
    pressure: string;
    humidity: string;
    seaLevel: string;
    grndLevel: string;
  };
  visibility: string;
  wind: {
    speed: string;
    deg: string;
    gust: string;
  };
  clouds: {
    all: string;
  };
  coord: {
    lon: string;
    lat: string;
  };
  weather: {
    main: string;
    description: string;
  }[];
  sys: {
    country: string;
  };
  name: string;
};
