import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import UserServices from './services/UserServices';

import {AuthContext} from '../../contex/authContex';

class SignInScreen extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      check_textInputChange: false,
      isValidUser: true,
      password: '',
      secureTextEntry: true,
      isValidPassword: true,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome Back</Text>
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" size={20} />
              <TextInput
                placeholder="Your Username"
                placeholderTextColor="#666666"
                style={[styles.textInput]}
                autoCapitalize="none"
                onChangeText={val => this.textInputChange(val)}
              />
              {this.state.check_textInputChange ? (
                <View>
                  <Feather name="check-circle" color="green" size={20} />
                </View>
              ) : null}
            </View>
            {this.state.isValidUser ? null : (
              <View>
                <Text>Username must be at 4 characters long</Text>
              </View>
            )}
          </View>

          <View>
            <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
            <View style={styles.action}>
              <Feather name="lock" size={20} />
              <TextInput
                placeholder="Your Password"
                placeholderTextColor="#666666"
                secureTextEntry={this.state.secureTextEntry}
                style={[styles.textInput]}
                autoCapitalize="none"
                onChangeText={val => this.handlePasswordChange(val)}
              />
              <TouchableOpacity
                onPress={() => {
                  this.updateSecureTextEntry();
                }}>
                {this.state.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View>
            {this.state.isValidPassword ? null : (
              <View>
                <Text style={styles.errorMsg}>
                  Password must be 8 characters long.
                </Text>
              </View>
            )}
            <TouchableOpacity>
              <Text style={{color: '#009387', marginTop: 15}}>
                Forgot password?
              </Text>
            </TouchableOpacity>

            <View style={styles.button}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => {
                  this.loginHandle(this.state.username, this.state.password);
                }}>
                <LinearGradient
                  colors={['#0531b3', '#436dd7']}
                  style={styles.signIn}>
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: '#fff',
                      },
                    ]}>
                    Sign In
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                  By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
                  {' '}
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('SignUpScreen')
                    }>
                    <Text
                      style={[
                        styles.textSign,
                        {
                          fontSize: 15,
                        },
                      ]}>
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  loginHandle(username, password) {
    const {signIn} = this.context;
    const userService = new UserServices();
    userService
      .signIn(username, password)
      .then(response => response.json())
      .then(json => {
        console.log('login response : ', json);
        console.log(json.message);
        console.log(json.statusCode);
        console.log(json.token);
        console.log(json.user);
        signIn(json.user, json.token);
      });
  }

  handlePasswordChange(val) {
    if (val.trim().length >= 8) {
      this.setState({
        password: val.trim(),
        isValidPassword: true,
      });
    } else {
      this.setState({
        password: val.trim(),
        isValidPassword: false,
      });
    }
  }

  updateSecureTextEntry() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  }

  textInputChange(val) {
    if (val.trim().length >= 4) {
      this.setState({
        username: val.trim(),
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      this.setState({
        username: val.trim(),
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a8ff',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  footer: {
    flex: 2,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_footer: {
    color: '#5a050c',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
});

export default SignInScreen;
