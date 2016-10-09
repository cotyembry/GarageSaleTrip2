/**
 *
 * @providesModule PhotosList
 */

import React from 'react';
import {
	CameraRoll,
	Image,
	ListView,
	Modal,
	Text,
	View,
	StyleSheet,
	TouchableHighlight,
	TouchableOpacity
} from 'react-native';


import CameraRollPicker from 'react-native-camera-roll-picker';

class PhotosList extends React.Component {
	componentDidMount() {
		exportHelper.rerenderHelper = this.rerender.bind(this);
	}
	constructor(props) {
		super(props);
		this.state = {
			CameraRollPickerKey: new Date(),
			text: new Date().toString()
		}
	}
	getSelectedImages(images) {
		console.log(images.length)
	}
	render() {
		return (
			<ModalExample />
		)
	}
	rerender() {
		this.setState({CameraRollPickerKey: new Date()})
	}

}

// var PhotoListExposure;
// exports = PhotoListExposure;

class ModalExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {modalVisible: false};
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <CameraRollPicker
				key={this.state.CameraRollPickerKey}
				callback={this.getSelectedImages}
				groupTypes='All'
			/>

            <TouchableHighlight onPress={() => {
              exportHelper.setModalVisible = this.setModalVisible.bind(this);
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </View>
    );
  }
}


var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1
  },
  url: {
    fontSize: 9,
    marginBottom: 14
  },
  image: {
    margin: 4
  },
  imageStyle: {
    margin: 4,
    width: 150,
    height: 150
  },
  info: {
    flex: 1
  },
  container: {
    flex: 1
  }
});

//rerenderHelper exposes a method from the PhotoList class to do what it says
var exportHelper = {
	rerenderHelper: ''
}


export { PhotosList, exportHelper };
