/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>Email address</Text>
        <TextInput style={styles.TextInput} placeholder="Email"/>
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          secureTextEntry={true}
        />
        <CheckBox
          title="Remember me"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.signin}>Sign in</Text>
        </TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </View>
      <View style={styles.join}>
        <Text style={styles.createAC}>Don't have an Account?</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    flex: 9,
    fontSize: 21,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: 12,
  },
  textTit: {
    fontSize: 21,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  icons: {
    padding: 12,
    flex: 1,
  },
  form: {
    padding: 15,
    flex: 5,
    borderTopWidth: 20,
    borderTopColor: '#D8D8D8',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: '#A4A4A4',
  },
  TextInput: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  button: {
    width: '100%',
    height: 50,
    color: 'black',
    backgroundColor: 'yellow',
    marginTop: 10,
  },
  signin: {
    textAlign: 'center',
    padding: 15,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  forgot: {
    color: '#A4A4A4',
    textAlign: 'center',
    padding: 15,
    textDecorationLine: 'underline',
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
  },
  join: {
    flex: 6,
    flexDirection: 'column',
  },
  createAC: {
    flex: 1,
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
    padding: 15,
    textDecorationLine: 'underline',
    textDecorationColor: 'black',
  },
});

export default Login;
