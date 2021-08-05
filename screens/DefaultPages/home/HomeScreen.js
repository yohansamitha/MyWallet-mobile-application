import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import {AuthContext} from '../../../contex/authContex';

const HomeScreen = () => {
  const {signOut} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="logout"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
