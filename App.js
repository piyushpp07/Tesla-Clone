import CarItem from './components/CarItem';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem name={"Model S"} tagline={"Order online for"} taglineCTA={"Touchless Delivery"} image={require('./assets/images/ModelS.jpeg')} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
