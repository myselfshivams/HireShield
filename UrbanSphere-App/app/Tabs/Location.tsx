// import React from "react";
// import { View, StyleSheet, SafeAreaView, Text } from "react-native";

// const Location = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text>Location Screen</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//   },
//   header: {
//     alignItems: "center",
//     justifyContent: "center",
//     alignSelf: "center",
//   },
// });

// export default Location;
import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Text, TextInput, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Location: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [coordinates, setCoordinates] = useState<{ latitude: number; longitude: number } | null>(null);

  const fetchCoordinates = async () => {
    console.log(searchQuery);
    // Replace with your geocoding API of choice (e.g., Google Maps API, OpenCage)
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${searchQuery}&key=e24cb4743d7b4246a195e047756b4090`
    );

    console.log(response);
    const data = await response.json();
    if (data.results && data.results[0]) {
      const { lat, lng } = data.results[0].geometry;
      setCoordinates({ latitude: lat, longitude: lng });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Location Screen</Text>
      </View>

      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter Location"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Button title="Search" onPress={fetchCoordinates} />
      </View>

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
          <Marker coordinate={coordinates} title="Location" />
        </MapView>
      ) : (
        <Text style={styles.noLocation}>No location found</Text>
      )}
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
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  searchBox: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  searchInput: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: "#ddd",
  },
  map: {
    flex: 1,
    marginTop: 20,
  },
  noLocation: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});

export default Location;
