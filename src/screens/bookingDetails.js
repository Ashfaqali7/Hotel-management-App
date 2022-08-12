import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import database from '@react-native-firebase/database';
const BookingDetails = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [age, setAge] = useState('');
  const [numofGuests, setNumberofGuests] = useState('');
  const obj = {
    name,
    contact,
    arrival,
    departure,
    age,
    numofGuests,
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={e => setName(e)}
        placeholder="Name"
        type="text"
      />
      <TextInput
        style={styles.input}
        value={contact}
        onChangeText={e => setContact(e)}
        placeholder="Contact"
        type="number"
      />
      <TextInput
        style={styles.input}
        value={arrival}
        onChangeText={e => setArrival(e)}
        placeholder="Arrival Date"
        type="date"
      />
      <TextInput
        style={styles.input}
        value={departure}
        onChangeText={e => setDeparture(e)}
        placeholder="Departure Date"
        type="date"
      />
      <TextInput
        style={styles.input}
        type="number"
        value={age}
        onChangeText={e => setAge(e)}
        placeholder="Age"
      />
      <TextInput
        style={styles.input}
        value={numofGuests}
        type="number"
        onChangeText={e => setNumberofGuests(e)}
        placeholder="Number of Guests"
      />

      <Button
        onPress={
          (onPressLearnMore = () => {
            var postListRef = database().ref('Customer');
            var newPostRef = postListRef.push();
            newPostRef.set({
              obj,
            });
            alert('The customer reservation has been accomplished');
          })
        }
        title="Book Now"
        color="#264653"
      />
    </View>
  );
};

export default BookingDetails;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    width: '100%',
    // height: '95%',
  },
  input: {
    alignItems: 'center',
    // backgroundColor: 'red',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    padding: 10,
  },
});
