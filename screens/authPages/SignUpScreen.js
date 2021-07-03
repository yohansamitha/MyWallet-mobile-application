import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> SignUpScreen </Text>
        <Button
          onPress={() => {
            this.props.navigation.navigate('WelcomeScreen');
          }}
          title="WelcomeScreen"
          color="#841584"
          style={{margin: 10}}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({});

export default SignUpScreen;
