import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const data = [
  { from: 'Station', route: '3C', destination: 'Waghodiya', distance: '30km', time: '1 hour' },
  { from: 'Station', route: '3B', destination: 'Waghodiya', distance: '25km', time: '45 min' },
  { from: 'Station', route: '3D', destination: 'Bapod Bypass', distance: '20km', time: '35 min' },
];

export default function SearchLocation({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image source={{ uri: 'https://ik.imagekit.io/lmmaihcez/Rectangle%20(2).png?updatedAt=1737569097173' }} style={styles.icon} />
        <TextInput placeholder="Search here!" style={styles.searchInput} placeholderTextColor="#000" />
        <Image source={{ uri: 'https://ik.imagekit.io/lmmaihcez/Slider.png?updatedAt=1738086193123' }} style={styles.icon} />
      </View>
      <ScrollView>
        {data.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.card} 
            onPress={() => navigation.navigate('LocationDetails', item)}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.from}>{item.from}</Text>
              <View style={styles.line} />
              <Text style={styles.route}>{item.route}</Text>
              <View style={styles.line} />
              <Text style={styles.destination}>{item.destination}</Text>
            </View>
            <View style={styles.cardDetails}>
              <View style={styles.infoContainer}>
                <Image source={{ uri: 'https://ik.imagekit.io/lmmaihcez/Rectangle.png?updatedAt=1737567748047' }} style={styles.icon} />
                <Text style={styles.info}>{item.distance}</Text>
              </View>
              <View style={styles.infoContainer}>
                <Image source={{ uri: 'https://ik.imagekit.io/lmmaihcez/Rectangle%20(1).png?updatedAt=1737567748082' }} style={styles.icon} />
                <Text style={styles.info}>{item.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, padding: 10, marginBottom: 10, justifyContent: 'space-between' },
  icon: { width: 20, height: 20, marginHorizontal: 10 },
  searchInput: { flex: 1, color: '#000' },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10, elevation: 3 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  line: { flex: 1, height: 2, width: '10%', backgroundColor: '#999', marginHorizontal: 5 },
  from: { fontSize: 16, fontWeight: 'bold' },
  route: { fontSize: 18, fontWeight: 'bold' },
  destination: { fontSize: 16, fontWeight: 'bold' },
  cardDetails: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 },
  infoContainer: { flexDirection: 'row', alignItems: 'center' },
  info: { fontSize: 14 }
});
