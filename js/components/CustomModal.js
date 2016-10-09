import React from 'react';
import {
  Dimensions,
  View,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

import CameraRollPicker from 'react-native-camera-roll-picker';
import Button from 'react-native-button';

export default class CustomModal extends React.Component {

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
            <Text>
              Tap the photos you would like me to be parse through so I can attempt to get the addresses off of them
            </Text>
          </View>
          <View>
            <TouchableHighlight style={styles.center} onPress={this.setModalVisible.bind(this, !this.state.modalVisible)}>
              <View style={styles.SelectPhotos}>
                <Text style={styles.TouchableText}>
                  Tap to Analyze Selected Photos
                </Text>
              </View>
            </TouchableHighlight>
            <View style={styles.CameraRollPicker}>
              <CameraRollPicker
        				key={this.state.CameraRollPickerKey}
        				callback={this.getSelectedImages}
        				groupTypes='All'
        			/>
            </View>
          </View>
         </View>
        </Modal>
        <Button
          style={styles.Button}
          styleDisabled={{color: 'red'}}
          onPress={() => this.setModalVisible(true)}>
          Tap to Select Photos to Use
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
    fontSize: 20
  },
  CameraRollPicker: {
    flex: 1,
    flexDirection: 'row',
    height: Dimensions.get("window").height
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 35
  },
  SelectPhotos: {
    borderColor: 'gray',
    borderWidth: 4,
    borderRadius: 20,
    backgroundColor: 'black'
  },
  TouchableText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 24,
    color: 'white'
  }
});
