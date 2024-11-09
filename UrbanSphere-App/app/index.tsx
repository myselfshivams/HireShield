import React, { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Splash"
>;

export default function Splash() {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const loaderWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(loaderWidth, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation, loaderWidth]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Urban<Text style={styles.highlight}>Sphere</Text>
      </Text>
      <View style={styles.loaderContainer}>
        <Animated.View
          style={[
            styles.loaderBar,
            {
              width: loaderWidth.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>
      <Image
        source={require("../assets/images/splash-bottom.png")}
        style={styles.heroImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D1B20",
  },
  title: {
    fontSize: 48,
    fontWeight: "700",
    color: "#dddddd",
    marginBottom: 20,
  },
  highlight: {
    color: "#9041FF",
  },
  loaderContainer: {
    width: "40%",
    height: 8,
    backgroundColor: "#333333",
    borderRadius: 4,
    overflow: "hidden",
    marginVertical: 20,
    marginBottom: 60,
  },
  loaderBar: {
    height: "100%",
    backgroundColor: "#9041FF",
    position: "absolute",
    left: 0,
    top: 0,
  },
  heroImage: {
    width: "100%",
    height: 200,
    position: "absolute",
    bottom: 0,
  },
  designedBy: {
    position: "absolute",
    bottom: 30,
    fontSize: 14,
    color: "#888888",
  },
});
