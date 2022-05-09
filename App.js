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