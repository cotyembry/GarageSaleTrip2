/**
 *          Author:    John Coty Embry
 *    Date Created:    10-07-2016
 *   Last Modified:    10-07-2016
 *
 * @providesModule AddAndEditPhotos
 */

import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
  CameraRoll,
  Dimensions,
  ScrollView
} from 'react-native';
import {
  Link
} from 'react-router-native';

import Button from 'react-native-button';

import CameraRollView from './js/components/CameraRollView.js';
import {PhotosList, rerenderHelper} from './js/components/PhotosList.js';
// import sayHello from './js/components/PhotosList.js';
// import PhotoListExposure from './js/components/PhotosList.js';



export default class AddAndEditPhotos extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.row}>
          <View style={styles.column, styles.left}>
            <Text>
              Column 1
            </Text>
          </View>
          <View style={styles.column2, styles.right}>
            <Text>
              Column 2
            </Text>
          </View>
      </View>
      </ScrollView>
    )
  }
}


          // <CameraRollView
          //   ref={(ref) => { this._cameraRollView = ref; }}
          //   batchSize={20}
          //   groupTypes={this.state.groupTypes}
          //   renderImage={this.renderImage}
          // />



const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  column2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  content: {

  },
  left: {
    margin: 0,
    padding: 0,

    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height
  },
  right: {
    margin: 0,
    padding: 0,
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  }
});
