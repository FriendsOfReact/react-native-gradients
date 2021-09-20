# 🎨React Native Gradients

> A React Native alternative to Linear and Radial gradients, using SVG!

![React Native Gradients Demo 1](https://media.giphy.com/media/2aGD6js89xV3tGAIrd/giphy.gif) ![React Native Gradients Demo 2](https://media.giphy.com/media/xUJYCCeNdDATlcSDNo/giphy.gif) ![React Native Gradients Demo 3](https://media.giphy.com/media/1X5Z1goLOMY7cMUEuM/giphy.gif)


## ⚙️Installation

**Note**: This library supports only React Native 0.60+ versions

Install `react-native-gradients` using your package manager

- npm
```sh
npm install --save react-native-gradients react-native-svg
```

- yarn

```sh
yarn add react-native-gradients react-native-svg
```

### iOS installation

As it uses [React Native SVG](https://github.com/react-native-svg/react-native-svg), you need to install the pod dependencies using following command

```sh
cd ios
pod install
```

## ✌️Usage

### Linear Gradient

```js
const colorList = [
  {offset: '0%', color: '#231557', opacity: '1'},
  {offset: '29%', color: '#44107A', opacity: '1'},
  {offset: '67%', color: '#FF1361', opacity: '1'},
  {offset: '100%', color: '#FFF800', opacity: '1'}
]
```

```jsx
<LinearGradient colorList={colorList} angle={90}/>
```

### Radial Gradient

```js
const colorList = [
  {offset: '0%', color: '#231557', opacity: '1'},
  {offset: '29%', color: '#44107A', opacity: '1'},
  {offset: '67%', color: '#FF1361', opacity: '1'},
  {offset: '100%', color: '#FFF800', opacity: '1'}
]
```

```jsx
<RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList}/>
```

### With Content

This library uses `<svg />` components. An option for other formats of "images" is using the React Native component `<ImageBackground />` but for `svg`s that is not possible (at least for now).

A good option is wrap your Gradient component into a `<View />` component and make that component has `position: absolute` style such as

```jsx
import { RadialGradient } from 'react-native-gradients';

const BackgroundGradient = ({ style, children }) => (
  <View style={[styles.gradientBg, style]}>
    <RadialGradient />
  </View>
);

const styles = StyleSheet.create({
  gradientBg: {
    position: absolute,
    width: "100%",
    height: "100%",
  },
});
```

For every case a specific solution could be used and this could work as a base to your case.

[![SonarCloud](https://sonarcloud.io/api/project_badges/quality_gate?project=react-native-gradients)](https://sonarcloud.io/dashboard?id=react-native-gradients)
