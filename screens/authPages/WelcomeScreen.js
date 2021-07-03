import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainWrap}>
        <View style={styles.headerWrap}>
          <Image
            animation="bounceIn"
            duraton="1500"
            source={require('./assets/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.footerWrap}>
          <Text style={[styles.title]}>Stay connected with every Income!</Text>

          <Text style={styles.text}>Sign in with account</Text>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignInScreen')}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}>
                <Text style={styles.textSign}>Get Started</Text>
                <MaterialIcons name="navigate-next" color="#fff" size={30} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainWrap: {
    flex: 1,
    backgroundColor: '#00a8ff',
  },

  headerWrap: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  footerWrap: {
    flex: 2,
    textAlign: 'center',
    backgroundColor: '#fff',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },

  logo: {
    width: 200,
    height: 200,
  },

  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },

  text: {
    color: 'grey',
    fontSize: 25,
    marginTop: 5,
  },

  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },

  signIn: {
    width: 160,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },

  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
