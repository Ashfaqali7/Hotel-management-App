import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import React from 'react';
import Detailsstyles from '../component/styles/DetailsStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
const PDetails = ({navigation, route}) => {
  // console.log(route.params.singleData);

  const {comingData} = route.params;
  console.log(route.params.singleData.description);
  // const {detail} = route.params.singleData;
  return (
    <View style={styles.container}>
      <View style={styles.ImageBox}>
        <Image
          style={{width: '100%', height: 210, resizeMode: 'contain'}}
          source={{uri: route.params.singleData.image}}
        />
      </View>
      <View style={styles.TextBox}>
        <View style={styles.tandC}>
          <Text style={styles.title}>{route.params.singleData.title} </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Icon name="location-on" size={30} color="#e63946" />
            <Text style={styles.Cata}>{route.params.singleData.location}</Text>
            <Text style={{marginTop: 6, marginLeft: 50, marginRight: 10}}>
              {route.params.singleData.rating.count} Reviews
            </Text>
          </View>
        </View>

        <Text style={styles.price}>$ {route.params.singleData.price}</Text>
        <View style={styles.Description}>
          <Text style={styles.DT}>Description</Text>
          <Text style={styles.des}>{route.params.singleData.description} </Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => alert('Thank You for using my app ')}>
            <Text style={{color: '#fff'}}>BOOK NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PDetails;
const styles = StyleSheet.create(Detailsstyles);
