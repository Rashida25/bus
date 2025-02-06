import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DevinfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Developer Info</Text>
      <Text style={styles.text}>Name: Rashida</Text>
      <Text style={styles.text}>App Version: 1.0.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#white',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DevinfoScreen;
