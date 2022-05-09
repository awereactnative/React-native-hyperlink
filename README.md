# react-native-hyperlink
[![NPM version](https://badge.fury.io/js/react-native-hyperlink.svg)](http://badge.fury.io/js/react-native-hyperlink) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/jondot/awesome-react-native#text--rich-content)

A `<Hyperlink />` component for [react-native](http://facebook.github.io/react-native/) & [react-native-web](https://github.com/necolas/react-native-web) that makes urls, fuzzy links, emails etc clickable

![demo](https://cdn.rawgit.com/obipawan/hyperlink/master/asset/screen.gif)

## Installation
```sh
npm i --save react-native-hyperlink
```

## Run
```sh
expo start
```
## Props
| name | desc | type | default
| --- | --- | --- | --- |
| `linkify` | [linkify-it](http://markdown-it.github.io/linkify-it/doc/) object, for custom schema  | `object` | `require('linkify-it')()`
| `linkStyle` | highlight clickable text with styles | `Text.propTypes.style` |
| `linkText` | A string or a func to replace parsed text | `oneOfType([ string, func ])` |
| `onPress` | Func to handle click over a clickable text with parsed text as arg | `func` |
| `onLongPress` | Func to handle long click over a clickable text with parsed text as arg | `func` |
|`linkDefault`|A platform specific fallback to handle `onPress`. Uses [Linking](https://facebook.github.io/react-native/docs/linking.html). Disabled by default | `bool`
|`injectViewProps`| Func with url as a param to inject props to the clickable component | `func` | `i => ({})`

## Test CODE of App.js File

```jsx
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Hyperlink from 'react-native-hyperlink'

const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionTitle}>
          Hyperlink open in Browser
      </Text>
      <Hyperlink linkDefault={true}>
        <Text style={styles.sectionDes}>
        https://reactnative.dev/
        </Text>
      </Hyperlink>

      <Text style={styles . sectionTitle}>
          Click on below link to get Alerted
      </Text>
      <Hyperlink linkStyle={{color: 'blue' ,fontSize:22}}
      onPress={(url, text) => alert(url +',' + text) }>
        <Text style={styles.sectionDes}>
          https://reactnative.dev/
        </Text>
      </Hyperlink>
      <Text style={styles.sectionTitle}>
        Hyperlink with color
        </Text>
        <Hyperlink linkStyle={{color: 'blue' ,fontSize:22}}
        onPress={ (url, text) => alert ('You Clicked on  ' + url) }>
        <Text style={styles . sectionDes}>
        https://reactnative.dev 
        </Text>
        </Hyperlink>


    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: '600',
    marginTop: 30
  },
  sectionDes: {
    marginTop: 8,
    fontSize: 22,
    fontWeight: '400'
  }
  });
```
