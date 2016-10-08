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
  View,
  ScrollView,
  CameraRoll,
  Image,
  Slider,
  Switch,
  TouchableOpacity
} from 'react-native';
import {
  Header,
  Link,
  nativeHistory,
  Route,
  Router,
  StackRoute,
  withRouter,
} from 'react-router-native';


import Home from './Home.js';
import HomeHeader from './Home.js';
import AddPhotos from './AddPhotos.js';
import test from './test.js';
import test2 from './test2.js';


class RoutesWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.component}>
        <Text>Text in the RoutesWrapper - {this.props.children.length} - View section</Text>
        {Object.keys(this.props.children).map((key,index,object) => object[key])}
      </View>
    )
  }
}

// const RoutesWrapper = (props) => (
//   <View style={styles.component}>
//     {props.children}
//   </View>
// )

// class GarageSaleTrip2 extends React.Component {
//   render() {
//     return (
//       <Router history={nativeHistory} addressBar style={styles.stackroute}>
//         <StackRoute path="stackroutewrapper" component={RoutesWrapper}>
//           <Route path="/" component={Home} overlayComponent={HomeHeader} />
//           <Route path="/addphotos" component={AddPhotos} />
//         </StackRoute>
//       </Router> 
//     )
//   }
// }

const routes = (
  <Router history={nativeHistory} addressBar>
    <StackRoute path="root" component={RoutesWrapper}>
      <Route path="/" component={Home} overlayComponent={HomeHeader} />
      <Route path="/addphotos" component={AddPhotos} />
      {/*<Route path="/settings" component={Settings} overlayComponent={SettingsHeader} />
      <Route path="/camera" component={camera} overlayComponent={CameraHeader} />*/}
    </StackRoute>
  </Router>
)





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

AppRegistry.registerComponent('GarageSaleTrip2', () => () => routes);
