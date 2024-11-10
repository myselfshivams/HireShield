// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import Svg, { Circle, Text as SvgText } from 'react-native-svg';

// const CityData: Record<string, { location: string; "PM2.5": number }[]> = require('../../data/almighty.json');

// const Index: React.FC = () => {
//   const [selectedCity, setSelectedCity] = useState<string>("Delhi");
//   const [localities, setLocalities] = useState<{ location: string, "PM2.5": number }[]>([]);

//   useEffect(() => {
//     if (selectedCity) {
//       setLocalities(CityData[selectedCity]);
//     }
//   }, [selectedCity]);

//   const getColor = (aqi: number): string => {
//     if (aqi <= 50) return "green";
//     else if (aqi <= 100) return "yellow";
//     else if (aqi <= 150) return "orange";
//     return "red";
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Select City</Text>
//       <Picker
//         selectedValue={selectedCity}
//         style={styles.picker}
//         onValueChange={(itemValue) => setSelectedCity(itemValue as string)}
//       >
//         {Object.keys(CityData).map((city) => (
//           <Picker.Item key={city} label={city} value={city} />
//         ))}
//       </Picker>

//       <Text style={styles.subtitle}>Locality Data for {selectedCity}</Text>
//       <ScrollView horizontal style={styles.scrollView}>
//         <Svg height="300" width="800">
//           {localities.map((loc, index) => (
//             <Circle
//               key={index}
//               cx={(index % 5) * 150 + 50}
//               cy={Math.floor(index / 5) * 100 + 50}
//               r={20}
//               fill={getColor(loc["PM2.5"])}
//             />
//           ))}
//           {localities.map((loc, index) => (
//             <SvgText
//               key={index + "_text"}
//               x={(index % 5) * 150 + 50}
//               y={Math.floor(index / 5) * 100 + 90}
//               fontSize="12"
//               fill="black"
//               textAnchor="middle"
//             >
//               {loc.location}
//             </SvgText>
//           ))}
//         </Svg>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//     padding: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginVertical: 10,
//   },
//   picker: {
//     height: 50,
//     width: 200,
//     alignSelf: "center",
//   },
//   subtitle: {
//     fontSize: 16,
//     textAlign: "center",
//     marginVertical: 20,
//   },
//   scrollView: {
//     marginVertical: 20,
//   },
// });

// export default Index;


import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  FlatList,
  Image,
  Modal,
  Pressable,
} from "react-native";

const Index: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [cityModalVisible, setCityModalVisible] = useState(false);

  // List of Indian cities
  const cities = [
    "Delhi",
    "Mumbai",
    "Kanpur",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Ahmedabad",
    "Pune",
    "Jaipur",
    "Lucknow",
  ];

  const localities = [
    { id: "1", name: "Downtown", image: "https://via.placeholder.com/80" },
    { id: "2", name: "Uptown", image: "https://via.placeholder.com/80" },
    { id: "3", name: "Suburb", image: "https://via.placeholder.com/80" },
    { id: "4", name: "Midtown", image: "https://via.placeholder.com/80" },
  ];

  const featured = [
    {
      id: "1",
      name: "Special Offer",
      image: "https://via.placeholder.com/120",
    },
    { id: "2", name: "Top Pick", image: "https://via.placeholder.com/120" },
    { id: "3", name: "Trending", image: "https://via.placeholder.com/120" },
  ];

  const handleCitySelection = () => {
    setCityModalVisible(true);
  };

  const handleCityPress = (city: string) => {
    setSelectedCity(city);
    setCityModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome,</Text>
      <Text style={styles.highlight}>Sanskar</Text>
      <TouchableOpacity
        onPress={handleCitySelection}
        style={styles.citySelector}
      >
        <Text style={styles.citySelectorText}>
          {selectedCity ? `City: ${selectedCity}` : "Select your City"}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={cityModalVisible}
        onRequestClose={() => setCityModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select a City</Text>
            {cities.map((city) => (
              <Pressable
                key={city}
                style={styles.cityItem}
                onPress={() => handleCityPress(city)}
              >
                <Text style={styles.cityName}>{city}</Text>
              </Pressable>
            ))}
            <Pressable
              style={styles.closeButton}
              onPress={() => setCityModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Text style={styles.sectionTitle}>Localities</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.localityScroll}
      >
        {localities.map((locality) => (
          <View key={locality.id} style={styles.localityItem}>
            <Image
              source={{ uri: locality.image }}
              style={styles.localityImage}
            />
            <Text style={styles.localityName}>{locality.name}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Featured</Text>
      <FlatList
        data={featured}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.featuredItem}>
            <Image source={{ uri: item.image }} style={styles.featuredImage} />
            <Text style={styles.featuredName}>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1B20",
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 30,
    color: "#ddd",
  },
  highlight: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#8A2BE2",
  },
  citySelector: {
    color: "#fff",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    marginTop: 10,
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  citySelectorText: {
    fontSize: 16,
    color: "#ddd",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cityItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
  },
  cityName: {
    fontSize: 16,
    textAlign: "center",
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#8A2BE2",
    borderRadius: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  sectionTitle: {
    color: "#888",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  localityScroll: {
    paddingVertical: 10,
  },
  localityItem: {
    alignItems: "center",
    marginRight: 15,
  },
  localityImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#f0f0f0",
  },
  localityName: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
    color: "#ddd",
  },
  featuredItem: {
    alignItems: "center",
    marginRight: 15,
  },
  featuredImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
  },
  featuredName: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
    color: "#ddd",
  },
});

export default Index;
