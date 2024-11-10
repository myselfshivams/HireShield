import React from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Define TypeScript type for user details
type UserDetail = {
  id: string;
  icon: keyof typeof Ionicons.glyphMap; // Icon name from Ionicons
  label: string;
};

export default function Profile() {
  // Array of user details with type annotation
  const userDetails: UserDetail[] = [
    {
      id: "1",
      icon: "person-circle-outline",
      label: "Team Airavata",
    },
    {
      id: "2",
      icon: "call-outline",
      label: "+91 8967452743",
    },
    {
      id: "3",
      icon: "mail-outline",
      label: "airavata@hackcbs.com",
    },
    {
      id: "4",
      icon: "location-outline",
      label: "Kanpur, India",
    },
    {
      id: "5",
      icon: "person-outline",
      label: "Male",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        {/* Cover Image */}
        <Image
          source={require("../../assets/images/profile-cover.jpg")}
          style={styles.coverImage}
        />

        {/* Header Container */}
        <View style={styles.headerContainer}>
          <Image
            source={require("../../assets/images/user.png")}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Team Airavata</Text>
        </View>

        {/* Details Card */}
        <View style={styles.singleCard}>
          {userDetails.map((item) => (
            <View key={item.id} style={styles.detailRow}>
              <Ionicons name={item.icon} size={24} color="#FFFFFF" />
              <Text style={styles.profileDetails}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1B20",
    alignItems: "center",
  },
  profileSection: {
    width: "100%",
    alignItems: "center",
    marginTop: 50,
    paddingBottom: 20,
  },
  coverImage: {
    width: "96%",
    height: 180,
    position: "absolute",
    top: 0,
    borderRadius: 14,
    opacity: 1,
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 100,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    marginBottom: 10,
    zIndex: 1,
  },
  profileName: {
    fontSize: 26,
    fontWeight: "600",
    color: "#ddd",
    marginTop: 10,
  },
  singleCard: {
    backgroundColor: "#333333",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    marginTop: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    gap: 20,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  profileDetails: {
    color: "#ccc",
    fontSize: 18,
    marginLeft: 15,
  },
});
