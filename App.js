/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import RootNavigator from './screens/authPages/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {Text, Button, View} from 'react-native';
const Drawer = createDrawerNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: true,
      animal: 'cat',
    };
  }
  componentDidMount() {}

  render() {
    return (
      <NavigationContainer>
        {/* {this.state.user ? (
          // <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          //   <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          //   <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          //   <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          //   <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
          // </Drawer.Navigator>
          <View>
            <Text>Welcome to Home</Text>
            <Button
              onPress={() => {
                this.setState({user: false});
              }}
              title="Logout"
              color="#841584"
              style={{margin: 10}}
            />
          </View>
        ) : (
          <RootNavigator />
        )} */}
        <RootNavigator />
      </NavigationContainer>
    );
  }
}
