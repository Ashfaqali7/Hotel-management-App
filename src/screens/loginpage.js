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

const LoginForm = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const goTosignUp = () => {
    navigation.navigate('SignUp');
  };
  const signin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Signed in
        var user = userCredential.user;
        navigation.navigate('home');
        setEmail('');
        setPassword('');

        // ...
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.signin}>SIGN IN</Text>
      </View>
      <View style={styles.InputBox}>
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
          // value={password}
          onChangeText={e => setPassword(e)}
          placeholderTextColor="#000"></TextInput>
        <View style={styles.rememberBox}></View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.forget} onPress={() => Linking.openURL('')}>
            Remember me
          </Text>
          <Text style={styles.rememberBox} onPress={() => Linking.openURL('')}>
            Forget the Password
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={signin}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 50,
          }}
          onFocus={''}>
          <Text style={styles.touch}> SIGN IN </Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text>Don't have Account ?</Text>
          <TouchableOpacity onPress={goTosignUp}>
            <Text style={{color: '#0080ff'}}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginForm;
const styles = StyleSheet.create(LoginStyle);
