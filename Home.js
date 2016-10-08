import React from 'react';
import {
  withRouter
} from 'react-router-native';

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

exports = HomeHeader;

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const DetailCard = ({ route, backgroundColor }) => (
      <Link to={'/' + route} style={styles.detailCard}>
        <View style={{ flex: 1, backgroundColor }} />
      </Link>
    );

    // const AddPhotos = () => (
    //   <Link to={'/addphotos'} style={styles.detailCard}>
    //     <View style={{ flex: 1 }} />
    //   </Link>
    // )

    return (
      <ScrollView>
        <DetailCard route="addphotos" backgroundColor="#EF4E5E" />
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
}