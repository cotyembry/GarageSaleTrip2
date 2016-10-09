/**
 *          Author:    John Coty Embry
 *    Date Created:    10-07-2016
 *   Last Modified:    10-07-2016
 *
 * 
 */

import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
  CameraRoll
} from 'react-native';
import {
  Link
} from 'react-router-native';

import CameraRollView from './js/components/CameraRollView.js';

var AddPhotos = React.createClass({
  getInitialState: function() {
    return {
      assets: [],
      text: 'default'
    }
  },
  loadImages: function() {
    this.setState({ text: "new text value!!!"})

    const fetchParams = {
        first: 25
    };
//     var images = CameraRoll.getPhotos(fetchParams);

/*
  {
  edges: ReactPropTypes.arrayOf(createStrictShapeTypeChecker({
    node: createStrictShapeTypeChecker({
      type: ReactPropTypes.string.isRequired,
      group_name: ReactPropTypes.string.isRequired,
      image: createStrictShapeTypeChecker({
        uri: ReactPropTypes.string.isRequired,
        height: ReactPropTypes.number.isRequired,
        width: ReactPropTypes.number.isRequired,
        isStored: ReactPropTypes.bool,
      }).isRequired,
      timestamp: ReactPropTypes.number.isRequired,
      location: createStrictShapeTypeChecker({
        latitude: ReactPropTypes.number,
        longitude: ReactPropTypes.number,
        altitude: ReactPropTypes.number,
        heading: ReactPropTypes.number,
        speed: ReactPropTypes.number,
      }),
    }).isRequired,
  })).isRequired,
  page_info: createStrictShapeTypeChecker({
    has_next_page: ReactPropTypes.bool.isRequired,
    start_cursor: ReactPropTypes.string,
    end_cursor: ReactPropTypes.string,
  }).isRequired,
}
*/



    CameraRoll.getPhotos(fetchParams).then((data) => {
      this.state.assets.push(data);

      this.setState({ text:  typeof data[0]  });


    }, (error) => {
      this.setState({ text:  'in error flow for getPhotos'  });
    })
  },
  render: function() {
    return (
      <View>
        <TouchableHighlight onPress={this.loadImages}>
          <Text >finally, a compromise... {this.state.text}</Text>
        </TouchableHighlight>
        <View>
          <CameraRollView
            ref={(ref) => { this._cameraRollView = ref; }}
            batchSize={20}
            groupTypes={this.state.groupTypes}
            renderImage={this._renderImage}
          />
        </View>
      </View>
    )
  }
})


module.exports = AddPhotos;



const styles = StyleSheet.create({
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
  }
});


