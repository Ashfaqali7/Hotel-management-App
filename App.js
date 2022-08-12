// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './src/screens/loginpage';
import HomeScreen from './src/screens/home';
import HotelDetail from './src/screens/hotelDetail';
import SignUp from './src/screens/signup';
import BookingDetails from './src/screens/bookingDetails';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Booking Form" component={BookingDetails} />
        <Stack.Screen
          options={{title: 'Login'}}
          name="Login"
          component={LoginPage}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="hotelDetail" component={HotelDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
