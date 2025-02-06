import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const { width, height } = Dimensions.get('window');

const Home = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [departure, setDeparture] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleLocationSwitch = () => {
    if (fromLocation !== '' && toLocation !== '') {
      const temp = fromLocation;
      setFromLocation(toLocation);
      setToLocation(temp);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRectangle}>
        <Text style={styles.headerText}>
          Where do you {'\n'}want to go?
        </Text>
      </View>

      <View style={styles.cardBox}>

        <ScrollView contentContainerStyle={styles.inputContainer}>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={fromLocation}
              onValueChange={(itemValue) => setFromLocation(itemValue)}
              style={styles.picker}>
              <Picker.Item label="Select From Location" value="" />
              <Picker.Item label="New York" value="New York" />
              <Picker.Item label="Los Angeles" value="Los Angeles" />
              <Picker.Item label="Chicago" value="Chicago" />
            </Picker>
          </View>

          <TouchableOpacity style={styles.swapButton} onPress={handleLocationSwitch}>
            <Image
              source={{
                uri: 'https://ik.imagekit.io/lmmaihcez/up-down.png?updatedAt=1733506689928',
              }}
              style={styles.swapIcon}
            />
          </TouchableOpacity>

          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={toLocation}
              onValueChange={(itemValue) => setToLocation(itemValue)}
              style={styles.picker}>
              <Picker.Item label="Select To Location" value="" />
              <Picker.Item label="Miami" value="Miami" />
              <Picker.Item label="San Francisco" value="San Francisco" />
              <Picker.Item label="Houston" value="Houston" />
            </Picker>
          </View>

          <View style={styles.rowWrapper}>
            <View style={styles.labelWrapper}>
              <TextInput
                style={styles.textInput}
                placeholder="Departure"
                placeholderTextColor="#000"
                value={departure}
                onChangeText={(text) => setDeparture(text)}
              />
            </View>
            <View style={styles.labelWrapper}>
              <TextInput
                style={styles.textInput}
                placeholder="Return"
                placeholderTextColor="#000"
                value={returnDate}
                onChangeText={(text) => setReturnDate(text)}
              />
            </View>
          </View>

          {/* Search Button */}
          <TouchableOpacity style={styles.searchButton} onPress={() => console.log('Search pressed')}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerRectangle: {
    height: height * 0.2,
    backgroundColor: '#F2B94F',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: width * 0.05,
    paddingTop: height * 0.02,
  },
  headerText: {
    fontSize: width * 0.1,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  cardBox: {
    position: 'absolute',
    top: height * 0.15,
    left: width * 0.05,
    right: width * 0.05,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: width * 0.05,
    elevation: 5,
    height: height * 0.65,
  },
  inputContainer: {
    paddingVertical: height * 0.02,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: height * 0.06,
    justifyContent: 'center',
    marginBottom: height * 0.02,
    position: 'relative',
  },
  picker: {
    width: '100%',
    height: '100%',
    color: 'black',
  },
  swapButton: {
    position: 'absolute',
    right: width * 0.1,
    top: '30%',
    transform: [{ translateY: -height * 0.04 }],
    backgroundColor: '#F2B94F',
    borderRadius: 50,
    width: width * 0.12,
    height: width * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    zIndex: 10,
  },
  swapIcon: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: 'contain',
  },
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: height * 0.02,
  },
  labelWrapper: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: '100%',
    fontSize: width * 0.04,
    color: '#333',
    textAlign: 'center',
  },
  searchButton: {
    marginTop: height * 0.03,
    backgroundColor: '#F2B94F',
    paddingVertical: height * 0.02,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    fontSize: width * 0.045,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Home;
