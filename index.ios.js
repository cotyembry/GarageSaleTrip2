/**
 * index.[ios|android].js
 */
 
import React from 'react';
import {
  AppRegistry,
  CameraRoll,
  Dimensions,
  Image,
  ScrollView,
  Slider,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
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

import Button from 'react-native-button';

import AddAndEditPhotos from './AddAndEditPhotos.js';
import CameraRollExample from './CameraRollExample.js';
import {PhotosList} from './js/components/PhotosList.js';
import CustomModal from './js/components/CustomModal.js';

 
const Master = (props) => (
  <View style={styles.component}>
    {props.children}
  </View>
);
 
const HomeHeader = withRouter((props) => {
  const handleRightButtonPress = () => {
    props.router.push('/detail/gray');
  };
 
  return (
    <Header
      {...props}
      style={{ backgroundColor: '#26BBE5' }}
      title="Feed"
      rightButtonText="Gray"
      onRightButtonPress={handleRightButtonPress}
    />
  );
});

 
const DetailHeader = withRouter((props) => {
  const { routeParams } = props;
  const title = routeParams.themeColor;
  const backgroundColor = routeParams.themeColor;
  const colors = ['#EF4E5E', '#D48445', '#AFCCB3', '#F0D73D', '#A176B0'];
 
  const handleRightButtonPress = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    props.router.push(`/detail/${encodeURIComponent(randomColor)}`);
  };
 
  return (
    <Header
      {...props}
      title={title}
      style={{ backgroundColor }}
      leftButtonText="Back"
      rightButtonText="Random"
      onRightButtonPress={handleRightButtonPress}
    />
  );
});
 
const Detail = (props) => (
  <View style={[styles.component, { backgroundColor: '#FFFFFF' }]}>{props.children}</View>
);


const Root = (props) => (
  <View style={styles.component}>
    {props.children}
  </View>
)


const Home = (props) => {
  const DetailCard = ({ route, backgroundColor }) => (
    <Link to={'/' + route} style={styles.detailCard}>
      <View style={{ flex: 1, backgroundColor }} />
    </Link>
  );
  const TakePhotos = () => (
    <Link to={'/takephotos'} style={styles.TakePhoto}>
      <View>
        <Text>Tap to take a new photo</Text>
      </View>
    </Link>    
  )

  return (
    <ScrollView style={styles.ScrollView}>
      <View style={styles.firstRow}>
        <CustomModal />
      </View>
      <TakePhotos />
      <DetailCard route="" backgroundColor="#9498CA" />
      <DetailCard route="" backgroundColor="#AFCCB3" />
      <DetailCard route="" backgroundColor="#F0D73D" />
      <DetailCard route="" backgroundColor="#A176B0" />
      <DetailCard route="" backgroundColor="#416BB4" />
      <DetailCard route="" backgroundColor="#94B5DC" />
      <DetailCard route="" backgroundColor="#D48445" />
    </ScrollView>
  )
}


class Routes2 extends React.Component {
  render() {
    return (
      <Router history={nativeHistory} addressBar>
        <StackRoute path="root" component={Root}>
          <Route path="/" component={Home} overlayComponent={HomeHeader} />
          <Route path="/takephotos" component={AddAndEditPhotos} />
          {/*<Route path="/addphotos" component={AddAndEditPhotos} />*/}
          {/*<Route path="/settings" component={Settings} overlayComponent={SettingsHeader} />
          <Route path="/camera" component={camera} overlayComponent={CameraHeader} />*/}
        </StackRoute>
      </Router>
    )
  }
}


AppRegistry.registerComponent('GarageSaleTrip2', () => Routes2);
// Advanced Usage
// You can customize behavior of the default reducers that are used to create the navigationState of <Route> or its siblings.

// This allows greater customizations on how <Link> behaves for a particular route and is especially useful for nested <StackRoute>'s where default action doesn't always lead to the intended behavior, or <TabsRoute>'s where double-taps should reset the navigationState of a nested <StackRoute>.

// const reducer = (
//   state: EnhancedNavigationState,
//   action: NavigationAction
// ): EnhancedNavigationState => ({
//   /* ... */
// });
 
const styles = StyleSheet.create({
  Button: {
    fontSize: 20,
    color: 'green'
  },
  component: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  home: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  detailCard: {
    width: Dimensions.get('window').width,
    height: 100
  },
  firstRow: {
    flex: 1,
    flexDirection: 'row',
    height: 75,
    justifyContent: 'center'
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
  ScrollView: {
    flex: 1,
    flexDirection: 'column'
  },
  TakePhoto: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'gray',
    width: Dimensions.get('window').width,
    height: 100
  }
});
