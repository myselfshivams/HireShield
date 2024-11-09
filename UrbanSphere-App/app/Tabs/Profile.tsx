import React from "react";
import { View, StyleSheet, SafeAreaView, Text, Image } from "react-native";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }} // Dummy image URL
          style={styles.profileImage}
        />
        <Text style={styles.name}>Team Airavata</Text>
        <Text style={styles.email}>Airavata@cbs.ac.in</Text>
        <Text style={styles.bio}>
          A passionate developer team with a love for mobile app development and React Native.
        </Text>
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
    marginTop: 40,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default Profile;
