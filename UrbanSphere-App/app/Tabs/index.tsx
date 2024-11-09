import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Home Screen</Text>
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

export default index;
