import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Linking,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import LoginStyle from '../component/styles/LoginStyle';
import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';

const SignUP = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const goTosignUp = () => {
    navigation.navigate('Login');
  };
  const signUP = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Login');
        setEmail('');
        setName('');
        setPassword('');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        alert(error);
      });

    setEmail('');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.signin}>SIGN UP</Text>
      </View>
      <View style={styles.InputBox}>
        <TextInput
          // value={email}
          onChangeText={e => setName(e)}
          type="text"
          value={name}
          style={styles.inputs}
          placeholder="Name"
          placeholderTextColor="#000"></TextInput>
        <TextInput
          // value={email}
          onChangeText={e => setEmail(e)}
          type="email"
          value={email}
          style={styles.inputs}
          placeholder="Email"
          placeholderTextColor="#000"></TextInput>
        <TextInput
          style={styles.inputs}
          secureTextEntry={true}
          placeholder="password"
          value={password}
          onChangeText={e => setPassword(e)}
          placeholderTextColor="#000"></TextInput>
        <View style={styles.rememberBox}></View>
      </View>
      <View>
        <TouchableOpacity
          onPress={signUP}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 50,
          }}
          onFocus={''}>
          <Text style={styles.touch}> SIGN UP </Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text>Already have Account ?</Text>
          <TouchableOpacity onPress={goTosignUp}>
            <Text style={{color: '#0080ff'}}>Sign In </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUP;
const styles = StyleSheet.create(LoginStyle);
