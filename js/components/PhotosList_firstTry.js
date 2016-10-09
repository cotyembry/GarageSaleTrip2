/**
 *
 * 
 */

import React from 'react';
import {
	CameraRoll,
	Image,
	ListView,
	Text,
	View,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

import groupByEveryN from 'groupByEveryN';


export default class PhotosList extends React.Component {
	addDataToScreen() {
		var ds = new ListView.DataSource({ rowHasChanged: this.rowHasChanged })

		var newDataSource = ['one', 'two', 'buckle my shoe']

		this.setState({
     		dataSource: this.state.dataSource.cloneWithRows(newDataSource)
    	})

		// var images = data.edges.map((image) => {
  //     		if (image === null) {
  //       		return null;
  //     		}

  //     		return this.renderImage(image);
  //   	});

  //   	// return (
  //    //  		<View style={styles.row}>
  //    //    		{images}
  //    //  		</View>
  //   	// );
    	

  //   	this.setState({ assets: this.state.assets.concat(images) })

	}
	// test(data) {
	// // 	var ds = new ListView.DataSource({ rowHasChanged: this.rowHasChanged })

	// // 	var newDataSource = ['one', 'two', 'buckle my shoe']

	// // 	this.setState({
 // //     		dataSource: ds.cloneWithRows(['one', 'two', 'buckle my shoe'])
 // //    	})
 // 		this.setState({ text: 'not default!!' })

	// }

	fetch() {
		var fetchParams: Object = {
	      first: 7
	    }
    
	    CameraRoll.getPhotos(fetchParams)
	    	// .then((data) => this.setState({dataSource: ds.cloneWithRows(['Sasha2', 'Jasper2', 'Coty2'])}), (e) => logError(e));
	    	.then((data) => this.test(data), (e) => logError(e));
	    


	    // this.addDataToScreen('data')
	}
	componentDidMount() {
		// this.setState({ text: 'not default!!' })
		console.log('here is a log!')
	}
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({ rowHasChanged: this.rowHasChanged })
		this.state = {
			assets: [],
			lengthLabel: '0',
			ds: ds,
			dataSource: ds.cloneWithRows([]),
			id: 0,
			text: 'default Text'
		}
		
		// ds.cloneWithRows(
		// 	groupByEveryN(this.state.assets, 1)
		// )
	}
	render() {
		return (
			<View>
				<ListView
		          dataSource={this.state.dataSource}
		          renderRow={this.renderRow}
		        />
		        <Text>{this.state.text}</Text>
			</View>
		)
	}

	renderRow = (rowData: Array<Image>, sectionID: string, rowID: string) => {
		var images = rowData.map((image) => {
      		if (image === null) {
        		return null;
      		}
      		else if(typeof image[0] === 'string') {
      			return image
      		}
      		return this.props.renderImage(image);
    	});

	   

	    return (
	    	<TouchableOpacity onPress={() => this.fetch()}>
		      <View style={styles.row}>
		        {images}
		      </View>
		    </TouchableOpacity>
	    );

	}
	renderImage(asset) {
        var imageSize = 150;
        var imageStyle = [styles.image, {width: imageSize, height: imageSize}];
        this.setState({ id: this.state.id + 1 })
        return (
          <Image
          	key={this.state.id}
            source={asset.node.image}
            style={imageStyle}
          />
        );
    }
	test(data) {

		var assets = data.edges;

    	this.setState({dataSource: this.state.ds.cloneWithRows(groupByEveryN(assets, 1))})
			
	}

    rowHasChanged = (r1, r2) => {
		if (r1.length !== r2.length) {
	      return true;
	    }

	    for (var i = 0; i < r1.length; i++) {
	      if (r1[i] !== r2[i]) {
	        return true;
	      }
	    }

	    return false;
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
