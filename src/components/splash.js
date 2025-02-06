import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Easing, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
  const circleScale = new Animated.Value(0); // Animation for circle scaling
  const iconScale = new Animated.Value(0); // Animation for icon scaling

  useEffect(() => {
    // Animate the circle and icon
    Animated.sequence([
      Animated.timing(circleScale, {
        toValue: 1, // Fully scaled
        duration: 1000, // 1 second
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(iconScale, {
        toValue: 1,
        duration: 800,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ]).start();

    // After animation completes, navigate to Home
    setTimeout(() => {
      navigation.replace('Home'); // Navigates to Home screen
    }, 1800); // Match the total duration of the animation
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Outer Animated Circle */}
      <Animated.View
        style={[styles.circle, { transform: [{ scale: circleScale }] }]}
      >
        {/* Image as the icon with animation */}
        <Animated.View
          style={{
            transform: [{ scale: iconScale }],
          }}
        >
          <Image
            source={{
              uri: 'https://ik.imagekit.io/lmmaihcez/public-transport.png?updatedAt=1733486139111',
            }}
            style={styles.icon}
          />
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2B94F', // Background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: width * 0.6, // 60% of screen width
    height: width * 0.6, // Maintain square aspect ratio
    borderRadius: (width * 0.6) / 2, // Circular shape
    backgroundColor: '#FFFFFF', // White circle
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 95, // Icon width (fixed size)
    height: 95, // Icon height (fixed size)
    resizeMode: 'contain', // Ensures the image maintains its aspect ratio
  },
});

export default SplashScreen;
