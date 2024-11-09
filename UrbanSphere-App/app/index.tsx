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
      <View style={styles.topLeftCircle} />
      <View style={styles.topRightCircle} />
      <Text style={styles.title}>
        Bus<Text style={styles.highlight}>Scout</Text>
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
    backgroundColor: "#ffffff",
  },
  topLeftCircle: {
    position: "absolute",
    top: -40,
    left: -56,
    width: 140,
    height: 140,
    backgroundColor: "#C8C8C8",
    borderRadius: 70,
  },
  topRightCircle: {
    position: "absolute",
    top: -60,
    right: -70,
    width: 220,
    height: 220,
    backgroundColor: "#ECECEC",
    borderRadius: 110,
  },
  title: {
    fontSize: 54,
    fontWeight: "700",
    color: "#333333",
    marginBottom: 40,
  },
  highlight: {
    color: "#ACACAC",
  },
  loaderContainer: {
    width: "40%",
    height: 8,
    backgroundColor: "#ECECEC",
    borderRadius: 4,
    overflow: "hidden",
    marginVertical: 20,
  },
  loaderBar: {
    height: "100%",
    backgroundColor: "#C1F21D",
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
