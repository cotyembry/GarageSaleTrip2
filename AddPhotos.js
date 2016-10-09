/**
 *          Author:    John Coty Embry
 *    Date Created:    10-07-2016
 *   Last Modified:    10-07-2016
 *
 * @providesModule AddPhotos
 */

import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
  CameraRoll,
  Dimensions
} from 'react-native';
import {
  Link
} from 'react-router-native';

import Button from 'react-native-button';

import CameraRollView from './js/components/CameraRollView.js';
import {PhotosList, rerenderHelper} from './js/components/PhotosList.js';
// import sayHello from './js/components/PhotosList.js';
// import PhotoListExposure from './js/components/PhotosList.js';



var AddPhotos = React.createClass({
  getInitialState: function() {
    return {
      assets: [],
      text: 'default',
      showListView: true
    }
  },
  loadImages: function() {
    this.setState({ text: "new text value!!!"})

    var fetchParams: Object = {
      first: this.props.batchSize,
      groupTypes: this.props.groupTypes,
      assetType: this.props.assetType,
    };
    CameraRoll.getPhotos(fetchParams)
      .then((data) => this._appendAssets(data), (e) => logError(e));
  },
  handlePress() {
    rerenderHelper();
    // if(this.state.showListView === false) {

    // }

    // this.setState({ showListView: !this.state.showListView})
  },
  renderImage: (asset) => {
    var imageSize = 150;
    var imageStyle = [styles.image, {width: imageSize, height: imageSize}];
    return (
      <Image
        source={asset.node.image}
        style={imageStyle}
      />
    );
  },
  render: function() {
    return (
      <View style={styles.PhotosList}>
        <Button
          style={styles.Button}
          styleDisabled={{color: 'red'}}
          onPress={() => this.handlePress()}>
          Analyze Photos
        </Button>
        {this.state.showListView === true ? <PhotosList /> : null}
      </View>
    )
  }
})


          // <CameraRollView
          //   ref={(ref) => { this._cameraRollView = ref; }}
          //   batchSize={20}
          //   groupTypes={this.state.groupTypes}
          //   renderImage={this.renderImage}
          // />

module.exports = AddPhotos;


const styles = StyleSheet.create({
  Button: {
    fontSize: 20,
    color: 'green'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  url: {
    fontSize: 9,
    marginBottom: 14,
  },
  image: {
    margin: 4,
  },
  info: {
    flex: 1,
  },
  PhotosList: {
    borderBottomColor: 'orange',
    //when setting this width for android see http://stackoverflow.com/questions/33297367/100-width-in-react-native-flexbox and use Dimensions.get('window').scale to help
    width: Dimensions.get('window').width,
    flex: 1,
    borderWidth: 2
  },
  CameraRollView: {
    width: 200,
    height: 800,
    margin: 20,
    width: 200,
    borderWidth: 2,
    borderBottomColor: 'orange'
  }
});


