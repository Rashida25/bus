import React from "react";
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const data = [
  {
    id: "1",
    title: "Sayaji Baug",
    location: "Vadodara, Gujarat",
    address: "Kala Ghoda, Vadodara, Gujarat 390001",
    image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/flora--fauna/sayaji-baug/Sayaji-Baug-1.jpg",
  },
  {
    id: "2",
    title: "Laxmi Vilas Palace",
    location: "Vadodara, Gujarat",
    address: "J N Marg, Moti Baug, Vadodara, Gujarat 390001",
    image: "https://historyofvadodara.in/wp-content/uploads/Sayaji-Baug.jpg",
  },
  {
    id: "3",
    title: "EME Temple",
    location: "Vadodara, Gujarat",
    address: "Fatehgunj, Vadodara, Gujarat 390002",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/f2/91/19/sayaji-baug.jpg?w=1200&h=-1&s=1",
  },
];

const Card = ({ title, location, address, image, isFirst }) => (
  <View style={[styles.cardContainer, isFirst && { marginTop: 30 }]}>
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  </View>
);

const App = () => (
  <View style={styles.container}>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <Card 
          title={item.title} 
          location={item.location} 
          address={item.address} 
          image={item.image} 
          isFirst={index === 0} // Add margin only for the first item
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#white",
    alignItems: "center",
  },
  cardContainer: {
    width: "100%",
    alignItems: "center",
  },
  card: {
    width: screenWidth * 0.9,
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  details: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  location: {
    fontSize: 16,
    fontWeight: "bold",
  },
  address: {
    fontSize: 14,
    color: "gray",
  },
});

export default App;
