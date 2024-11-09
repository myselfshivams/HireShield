import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";

const Location = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Location Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default Location;
