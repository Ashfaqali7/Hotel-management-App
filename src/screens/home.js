import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import hotels from '../component/inputs';
import Homestyle from '../component/styles/HomeStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../assets/logo.png';
const HomeScreen = ({navigation, route}) => {
  //!For getting data from Login page /////
  const state = route.params;

  const [email, setEmail] = useState(state);
  useEffect(() => {
    setEmail(state);
  }, []);

  //!For getting data from Login page /////

  //For input Data Fetch start.....//

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(hotels);
  }, []);

  ////For input Data Fetch end.....///////

  // for next page
  // console.log(hotels);

  const nextpage = item => {
    navigation.navigate('hotelDetail', {singleData: item});
  };
  // for next page end
  const welback = {
    uri: 'https://shangrilaresorts.com.pk/wp-content/uploads/2020/03/shangrila-view-cottages-1-1-1024x682.jpg',
  };
  return (
    <>
      <ScrollView>
        <ImageBackground
          source={welback}
          resizeMode="cover"
          style={styles.welcomepage}>
          <Image
            source={logo}
            style={{
              width: 100,
              height: 60,
              position: 'relative',
              right: 120,
              bottom: 110,
              backgroundColor: '#fff',
            }}
          />
          <Text style={styles.welcome}> WELCOME TO FIND MY HOTEL</Text>
        </ImageBackground>
        <View style={{alignItems: 'center', margin: 15}}>
          <Text style={{fontWeight: '500'}}>Recomended Hotels for You</Text>
        </View>
        {data.map((e, i) => (
          <View key={i} style={styles.container}>
            <View style={styles.Box}>
              <View style={{width: '100%'}}>
                <Image source={{uri: e.image}} style={styles.image} />
              </View>
              <View style={styles.TextBox}>
                <Text style={styles.title}>{e.title}</Text>
                <Text style={styles.price}> ${e.price}</Text>
                <Text
                  style={{
                    paddingHorizontal: 10,
                    fontWeight: 'bold',
                    margin: 10,
                  }}>
                  <Icon name="star" size={25} color="#efa210" />
                  <Icon name="star" size={25} color="#efa210" />
                  <Icon name="star" size={25} color="#efa210" />
                  <Icon name="star" size={25} color="#efa210" />
                  <Icon name="grade" size={25} color="#efa210" />
                  {e.rating.rate}
                </Text>
                <TouchableOpacity
                  style={styles.buyButton}
                  onPress={() => nextpage(e)}>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    Check Details
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create(Homestyle);

export default HomeScreen;
