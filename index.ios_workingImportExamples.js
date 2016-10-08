/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


//The packager uses two methods to look up modules. The first is based on docblock headers: if you write "@providesModule X" in the first docblock this enables require('X'). The other method is Node's resolution.


import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AddPhotos from './AddPhotos.js';
import test from './test.js';
import test2 from './test2.js';


class GarageSaleTrip2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: test.value,
      test2: test2.value
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! Test = {this.state.test}
          Test2 = {this.state.test2}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GarageSaleTrip2', () => GarageSaleTrip2);
