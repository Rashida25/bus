import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View } from 'react-native';
import Home from './src/components/home';
import Splash from './src/components/splash';
import Devinfo from './src/components/devinfo';
import Favlocation from './src/components/favlocation';
import Searchlocation from './src/components/searchlocation';
import Locationdetails from './src/components/locationdetails';


// Stack and Tab Navigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarIcon: () => <TabIcon uri="https://ik.imagekit.io/lmmaihcez/home-icon-silhouette.png?updatedAt=1733500510707" />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Searchlocation}
        options={{
          tabBarIcon: () => <TabIcon uri="https://ik.imagekit.io/lmmaihcez/location-search-symbol.png?updatedAt=1733500483792" />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favlocation}
        options={{
          tabBarIcon: () => <TabIcon uri="https://ik.imagekit.io/lmmaihcez/favourite.png?updatedAt=1733500483852" />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Info"
        component={Devinfo}
        options={{
          tabBarIcon: () => <TabIcon uri="https://ik.imagekit.io/lmmaihcez/information-button.png?updatedAt=1733500483816" />,
        }}
      />
    </Tab.Navigator>
  );
};

// Main App Stack Navigator
const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="LocationDetails" component={Locationdetails} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

// Custom Tab Icon Component
const TabIcon = ({ uri }) => (
  <View style={styles.iconWrapper}>
    <Image source={{ uri }} style={styles.icon} />
  </View>
);

// Main App with NavigationContainer
const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

// Styles
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#F2B94F',
    height: 70,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop: 25,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default App;
