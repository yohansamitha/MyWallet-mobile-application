/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {createDrawerNavigator} from '@react-navigation/drawer';
import RootNavigator from './screens/authPages/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';

import SettingsScreen from './screens/DefaultPages/DrowNavigator';
import HomeScreen from './screens/DefaultPages/HomeScreen';

import {AuthContext} from './contex/authContex';

const Drawer = createDrawerNavigator();

const App = () => {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        console.log('login dispatch : ', action.id, ' : ', action.token);
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (userName, userToken) => {
        console.log('yessss');
        console.log(userName, ' : ', userToken);
        try {
          await AsyncStorage.setItem('userToken', userToken);
          await AsyncStorage.setItem('userName', userName);
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
          await AsyncStorage.removeItem('userName');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {},
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      let tempUserToken;
      tempUserToken = null;
      let tempUserName;
      tempUserName = null;
      try {
        tempUserToken = await AsyncStorage.getItem('userToken');
        tempUserName = await AsyncStorage.getItem('userName');
      } catch (e) {
        console.log(e);
      }
      dispatch({
        type: 'RETRIEVE_TOKEN',
        token: tempUserToken,
        userName: tempUserName,
      });
      console.log(
        'component did mount userToken : ',
        null === tempUserToken ? 'null' : 'not null',
      );
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else {
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator>
            <Drawer.Screen name="HomeDrawer" component={HomeScreen} />
            <Drawer.Screen name="SupportScreen" component={SettingsScreen} />
          </Drawer.Navigator>
        ) : (
          <RootNavigator />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
