

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Test App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'red',

  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'beige'
  }
});

export default App;
