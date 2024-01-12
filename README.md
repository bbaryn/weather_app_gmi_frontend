## Project description

A simple application to check the current weather plugged into the Open Weather Map API. Written using the React Native library and the Expo platform. Used the cheap and popular Axios library to connect to the API (React Query would have been a bit too powerful to handle 2 endpoints). The Nativewind bil library was used to implement Tailwind in the project (this made the application styling process faster and easier. The app remains responsive and was programmed to work on devices with screens > 5 inches.
Tested on systems with iOS > 15 and Android API > 29.

## How to start

Steps needed to run apliaction (replace your-tag with your own tag):

1. Install Expo following the docs [`expo`](https://docs.expo.dev/get-started/installation/)
2. Run `yarn install`
3. Create an `.env` file with the given fields:
   1. API_KEY=
   2. BACKEND_URL=
      1. if you have problems connecting to the API on android devices, please use your ip address instead of localhost. More information about the error can be found under this question on [`Stackoverflow`](https://stackoverflow.com/questions/49370747/network-error-with-axios-and-react-native)
   3. DEFAULT_LAT=
   4. DEFAULT_LON=
and fill them in with your data.
4.  Run `yarn run start`. Optional you could run `yarn start ios` or `yarn run android` to run a specific simulator.
    1.  Before performing the above operation, make sure you have installed and set up all the tools to run simulators for iOS/Android

## Project structure

- `api` keeps types & utility functions for communicating with api.
- `assets` globally accessible assets like images, icons etc.
- `components` constains all componenets used in app
- `constants` globally accessible constants
- `screens` constains all screens used by app
- `types` well .. types for entities etc.
- `utils` contains multiple helper functions

## Core libraries

- [`expo`](https://expo.dev/) - Create universal native apps with React that run on Android, iOS, and the web. Iterate with confidence.
- [`axios`](https://axios-http.com/) - Axios is a simple promise based HTTP client for the browser and node.js
- [`lodash`](https://lodash.com/) - Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
- [`nativewind`](https://www.nativewind.dev/) - NativeWind uses Tailwind CSS as scripting language to create a universal style system for React Native

## Planned improvements

- [ ] Error handler should be able to handle more complicated scenarios
- [ ] TS have default settings provided by the EXPO. They should be reviewed and brought up to the latest standards
- [ ] Implement documentation using swagger
- [ ] Write tests
- [ ] Create build and test it on the devices
- [ ] Add the possibility to scale text to screen size
- [ ] Implement and setup Prettier/Eslint/Husky
