import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

const Location: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [coordinates, setCoordinates] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const fetchCoordinates = async () => {
    if (searchQuery.trim() === "") return;
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${searchQuery}&key=e24cb4743d7b4246a195e047756b4090`
      );

      const data = await response.json();
      if (data.results && data.results[0]) {
        const { lat, lng } = data.results[0].geometry;
        setCoordinates({ latitude: lat, longitude: lng });
      } else {
        setCoordinates(null);
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      setCoordinates(null);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Find a Location</Text>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Enter location"
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={fetchCoordinates}
          >
            <Ionicons name="search-outline" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Map Display */}
      {coordinates ? (
        <MapView
          style={styles.map}
          region={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={coordinates} title="Searched Location" />
        </MapView>
      ) : (
        <Text style={styles.noLocation}>
          No location found. Please enter a valid location.
        </Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: "#1D1B20",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerText: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "500",
    color: "#fff",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: "#333",
    borderRadius: 100,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    color: "#fff",
  },
  searchInput: {
    paddingLeft: 14,
    flex: 1,
    height: 45,
    fontSize: 16,
    color: "#fff",
  },
  searchButton: {
    backgroundColor: "#8A2BE2",
    padding: 10,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 0,
  },
  map: {
    flex: 1,
    overflow: "hidden",
  },
  noLocation: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    color: "#555",
  },
});

export default Location;
