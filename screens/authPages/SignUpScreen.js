import React, {Component} from 'react';
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import UserServices from './services/UserServices';
import UserDTO from './dto/UserDTO';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nicNumber: '',
      isValidNICNumber: false,
      errorNICNumber: false,
      username: '',
      isValuidUserName: true,
      email: '',
      emailValidation: false,
      password: '',
      isValidPassword: true,
      check_textInputChange: false,
      confirm_password: '',
      isSamePassword: true,
      secureTextEntry: true,
      confirm_secureTextEntry: true,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Register Now!</Text>
        </View>

        <View style={styles.footer}>
          <ScrollView>
            {/* NIC text feild */}
            <View>
              <Text style={styles.text_footer}>NIC number</Text>
              <View style={styles.action}>
                <FontAwesome name="id-card" color="#05375a" size={20} />
                <TextInput
                  placeholder="Your NIC number"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={val => this.nicOnChange(val)}
                />
                {this.state.isValidNICNumber ? (
                  <View>
                    <Feather name="check-circle" color="green" size={20} />
                  </View>
                ) : null}
              </View>
              {this.state.errorNICNumber ? (
                <View>
                  <Text
                    style={{
                      color: 'red',
                    }}>
                    NIC number must be at 8 characters long
                  </Text>
                </View>
              ) : null}
            </View>
            {/* name text feild */}
            <View>
              <Text
                style={[
                  styles.text_footer,
                  {
                    marginTop: 8,
                  },
                ]}>
                Name
              </Text>
              <View style={styles.action}>
                <FontAwesome name="user-o" color="#05375a" size={20} />
                <TextInput
                  placeholder="Your Name"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={val => this.nameOnChange(val)}
                />
                {this.state.check_textInputChange ? (
                  <View>
                    <Feather name="check-circle" color="green" size={20} />
                  </View>
                ) : null}
              </View>
            </View>
            {/* Email text feild */}
            <View>
              <Text
                style={[
                  styles.text_footer,
                  {
                    marginTop: 8,
                  },
                ]}>
                Email
              </Text>
              <View style={styles.action}>
                <Feather name="mail" color="#05375a" size={20} />
                <TextInput
                  placeholder="Your Email"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={val => this.handleEmailChange(val)}
                />
                {this.state.emailValidation ? (
                  <View>
                    <Feather name="check-circle" color="green" size={20} />
                  </View>
                ) : null}
              </View>
            </View>
            {/* password text feild */}
            <View>
              <Text
                style={[
                  styles.text_footer,
                  {
                    marginTop: 8,
                  },
                ]}>
                Password
              </Text>
              <View style={styles.action}>
                <Feather name="lock" color="#05375a" size={20} />
                <TextInput
                  placeholder="Your Password"
                  secureTextEntry={this.state.secureTextEntry}
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={val => this.handlePasswordChange(val)}
                />
                <TouchableOpacity onPress={this.updateSecureTextEntry}>
                  {this.state.secureTextEntry ? (
                    <Feather name="eye-off" color="grey" size={20} />
                  ) : (
                    <Feather name="eye" color="grey" size={20} />
                  )}
                </TouchableOpacity>
              </View>
              {this.state.isValidPassword ? null : (
                <View>
                  <Text
                    style={{
                      color: 'red',
                    }}>
                    Password must be minimum 8 and maximum 12 characters
                  </Text>
                </View>
              )}
            </View>
            {/* password confirm text feild */}
            <View>
              <Text
                style={[
                  styles.text_footer,
                  {
                    marginTop: 8,
                  },
                ]}>
                Confirm Password
              </Text>
              <View style={styles.action}>
                <Feather name="lock" color="#05375a" size={20} />
                <TextInput
                  placeholder="Confirm Your Password"
                  secureTextEntry={this.state.confirm_secureTextEntry}
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={val => this.handleConfirmPasswordChange(val)}
                />
                {/* <TouchableOpacity onPress={this.updateConfirmSecureTextEntry()}>
                {this.state.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity> */}
              </View>
              {this.state.isSamePassword ? null : (
                <View>
                  <Text
                    style={{
                      color: 'red',
                    }}>
                    Password and conformation password are not the same
                  </Text>
                </View>
              )}
            </View>

            <View style={styles.textPrivate}>
              <Text style={styles.color_textPrivate}>
                By signing up you agree to our
              </Text>
              <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
                {' '}
                Terms of service
              </Text>
              <Text style={styles.color_textPrivate}> and</Text>
              <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
                Privacy policy
              </Text>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => {
                  console.log('sighup button pressed');
                  this.handleSignIp();
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
                    Sign Up
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>Already a member</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
                  {' '}
                  <TouchableOpacity
                    onPress={() =>
                      // this.props.navigation.goBack()
                      this.props.navigation.navigate('SignInScreen')
                    }>
                    <Text
                      style={[
                        styles.textSign,
                        {
                          fontSize: 14,
                        },
                      ]}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }

  nicOnChange(val) {
    if (val.trim().length >= 8) {
      this.setState({
        nicNumber: val,
        isValidNICNumber: true,
        errorNICNumber: false,
      });
    } else {
      this.setState({
        nicNumber: val,
        isValidNICNumber: false,
        errorNICNumber: true,
      });
    }
  }

  nameOnChange = val => {
    if (val.trim().length >= 8) {
      this.setState({
        username: val,
        check_textInputChange: true,
      });
    } else {
      this.setState({
        username: val,
        check_textInputChange: false,
      });
    }
  };

  handleEmailChange(val) {
    this.handleValidation(
      val,
      /[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/,
    );
    this.setState({
      email: val,
    });
  }

  handleValidation(email, pattern) {
    let b = pattern.test(email);
    this.setState({emailValidation: b});
    console.log('email validation ' + b + ' ' + email);
  }

  handlePasswordChange = val => {
    if (val.trim().length > 8 && val.trim().length < 12) {
      this.setState({
        password: val,
        isValidPassword: true,
      });
    } else {
      this.setState({
        password: val,
        isValidPassword: false,
      });
    }
  };

  handleConfirmPasswordChange = val => {
    console.log(this.state.password + ' ' + val);
    if (this.state.password === val) {
      this.setState({
        confirm_password: val,
        isSamePassword: true,
      });
      console.log('same password');
    } else {
      this.setState({
        confirm_password: val,
        isSamePassword: false,
      });
      console.log('not same password');
    }
  };

  updateSecureTextEntry = () => {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  };

  handleSignIp() {
    console.log('====================================');
    console.log(this.state.nicNumber);
    console.log(this.state.username);
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.confirm_password);
    console.log('====================================');
    let userServices = new UserServices();
    userServices
      .signUp(
        new UserDTO(
          this.state.nicNumber,
          this.state.username,
          this.state.email,
          this.state.confirm_password,
        ),
      )
      .then(response => response.json())
      .then(json => {
        console.log('response ', json);
        console.log('==========================');
        return json.dataObj;
      })
      .catch(error => {
        console.log('error ' + error);
        return error;
      });
    console.log('button done');
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
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
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
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 18,
  },
  color_textPrivate: {
    color: 'grey',
  },
});

export default SignUpScreen;
