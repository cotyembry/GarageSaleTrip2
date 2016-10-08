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
  CameraRoll
} from 'react-native';
import {
  Link
} from 'react-router-native';


  // const AddPhotos = () => (
  //   <Link to={'/addphotos'} style={styles.detailCard}>
  //     <View style={{ flex: 1 }} />
  //   </Link>
  // )

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


    CameraRoll.getPhotos(fetchParams).then((data) => {
      this.state.assets.push(data);

      this.setState({ text:  Object.keys(data).length  });


    }, (error) => {
      console.log('error = ', error);
    })
  },
  render: function() {
    return (
      <TouchableHighlight onPress={this.loadImages}>
        <View>
          <Text >finally, a compromise... {this.state.text}</Text>
            {
              this.state.assets.map((node, index) => {
                return (
                  <Image
                    key={index}
                    source={node.image}
                    style={{width: 100, height: 100}}
                  />
                )
              })
            }
        </View>
      </TouchableHighlight>
    )
  }
})

// const AddPhotos = (props) => {
//   return (
//     <Link to={'/addphotos'}>
//       <View>
//         <Text>
//           finally, a compromise...</Text>
//           {[1,2,3,4].map((value, index) => {
//             return (
//               <View key={index}>
//                 <Text key={index} onClick={this.onClick}>{'The value is: ' + value}</Text>
//               </View>
//             )
//           })}
//       </View>
//     </Link>
//   )
// }

module.exports = AddPhotos;

// export class AddPhotos extends React.Component {
//   render() {
//     return (
//       <Link to={'/addphotos'}>
//         <View>
//           <Text>hiaksdfj</Text>
//         </View>
//       </Link>
//     )
//   }
// }


// class AddPhotos extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       assets: []
//     }
//   }
//   render() {
//     return (
//       <Link to={'/addphotos'} style={styles.detailCard}>

//       </Link>
//     )
//   }
// }

          //{
          /*
              this.state.assets.map((node, index) => {
                return (
                  <View>
                    <Image
                      source={node.image}
                      style={imageStyle}
                    />
                    <View style={styles.info}>
                      <Text style={styles.url}>{asset.node.image.uri}</Text>
                      <Text>{locationStr}</Text>
                      <Text>{asset.node.group_name}</Text>
                      <Text>{new Date(asset.node.timestamp).toString()}</Text>
                    </View>
                  </View>
                )
              })
          //*///}
// class AddPhotos extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "this is the default text"
//     }
//     // this.setState({text: "This is the defaul text"});
//   }
//   componentDidMount() {
//     const fetchParams = {
//         first: 25
//     };
//     var images = CameraRoll.getPhotos(fetchParams);
//     // CameraRoll.getPhotos(fetchParams, this.storeImages, this.logImageError);
//     // CameraRoll.getPhotos(.then());
//     // CameraRoll.getPhotos({first: 5}).done(
//     //   (data) =>{
//     //     console.log(data);
//     //     this.setState({
//     //       photoSource: {uri: data.edges[3].node.image.uri}
//     //     })
//     //   },
//     //   (error) => {
//     //     console.warn(error);
//     //   }
//     // );
//     CameraRoll.getPhotos().then((data) => {
//       this.setState({ text: "the data works"});
//     }, (error) => {
//       console.log('error = ', error);
//     })
//   }
//   storeImages(data) {
//     console.log('setting images')
//     const assets = data.edges;
//     const images = assets.map( asset => asset.node.image );
//     this.setState({
//         images: images
//     });
//   }
//   logImageError(err) {
//     console.log(err);
//   }
//   render() {
//     return (
//       <View>
//         <Text>{this.state.text}</Text>
//       </View>
//     )
//   }
// }



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


