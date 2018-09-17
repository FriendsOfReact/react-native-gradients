# React Native Gradients

![React Native Gradients Demo 1](https://media.giphy.com/media/2aGD6js89xV3tGAIrd/giphy.gif) ![React Native Gradients Demo 1](https://media.giphy.com/media/1X5Z1goLOMY7cMUEuM/giphy.gif)

## Installation
First of all, install React Native Gradients using following commands.

```
// via NPM
npm install --save react-native-gradients

// via Yarn
yarn add react-native-gradients
```

It uses React Native SVG library, and because of this, link this library before run application.

```
react-native link react-native-svg
```

## Usage
It supports only linear gradient for now and it takes two props. 

```
const colorList = [
  {offset: '0%', color: '#231557', opacity: '1'},
  {offset: '29%', color: '#44107A', opacity: '1'},
  {offset: '67%', color: '#FF1361', opacity: '1'},
  {offset: '100%', color: '#FFF800', opacity: '1'}
]
```

```
<LinearGradient colorList={colorList} angle={90}/>
```
