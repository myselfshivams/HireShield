import React, { useEffect, useState } from "react";
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
import { useNavigation } from "expo-router";
import CityData from "../../data/almighty.json";

const Index: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>("Kanpur");
  const [cityModalVisible, setCityModalVisible] = useState(false);
  const [localities, setLocalities] = useState<
    { id: string; name: string; image: string; score: number }[]
  >([]);

  useEffect(() => {
    const cityLocalities = CityData[selectedCity] || [];
    const localityData = cityLocalities.map(
      (locality: { location: string; "PM2.5": number }, index: number) => ({
        id: String(index + 1),
        name: locality.location,
        image: "https://via.placeholder.com/80",
      })
    );
    setLocalities(localityData);
  }, []);

  useEffect(() => {
    const cityLocalities = CityData[selectedCity] || [];
    const localityData = cityLocalities.map(
      (locality: { location: string; "PM2.5": number }, index: number) => ({
        id: String(index + 1),
        name: locality.location,
        image: "https://via.placeholder.com/80",
        score: parseFloat((Math.random() * 5).toFixed(2)),
      })
    );
    setLocalities(localityData);
  }, [selectedCity]);

  const navigation = useNavigation();

  const cities = [
    "Delhi", "Mumbai", "Kanpur", "Bangalore", "Chennai",
    "Kolkata", "Hyderabad", "Ahmedabad", "Pune", "Jaipur", "Lucknow",
  ];

  const featured = [
    { id: "1", name: "Special Offer", image: "https://via.placeholder.com/120" },
    { id: "2", name: "Top Pick", image: "https://via.placeholder.com/120" },
    { id: "3", name: "Trending", image: "https://via.placeholder.com/120" },
  ];

  const handleCitySelection = () => setCityModalVisible(true);
  
  const handleCityPress = (city: string) => {
    setSelectedCity(city);
    setCityModalVisible(false);
    const cityLocalities = CityData[city] || [];
    const localityData = cityLocalities.map(
      (locality: { location: string; "PM2.5": number }, index: number) => ({
        id: String(index + 1),
        name: locality.location,
        image: "https://via.placeholder.com/80",
        score: parseFloat((Math.random() * 5).toFixed(2)),
      })
    );
    setLocalities(localityData);
  };

  return (
    <ScrollView style={styles.container}>
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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Localities</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.localityScroll}
        >
          {localities.map((locality) => (
            <TouchableOpacity
              key={locality.id}
              style={styles.localityItem}
              onPress={() =>
                navigation.navigate("CityStats", { localityName: locality.name })
              }
            >
              <Image
                source={{ uri: locality.image }}
                style={styles.localityImage}
              />
              <Text style={styles.localityName}>{locality.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
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
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Leaderboard</Text>
        <ScrollView style={styles.leaderboardContainer}>
          {localities
            .sort((a, b) => b.score - a.score)
            .map((locality) => (
              <View key={locality.id} style={styles.leaderboardItem}>
                <Text style={styles.localityName}>{locality.name}</Text>
                <View style={styles.barContainer}>
                  <View
                    style={[styles.bar, { width: `${locality.score * 20}%` }]}
                  />
                  <Text style={styles.scoreText}>{locality.score}</Text>
                </View>
              </View>
            ))}
        </ScrollView>
      </View>
    </ScrollView>
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
  section: {
    marginBottom: 20,
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
    borderRadius: 10,
    marginBottom: 5,
  },
  localityName: {
    color: "#ddd",
    fontSize: 14,
  },
  featuredItem: {
    alignItems: "center",
    marginRight: 15,
  },
  featuredImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  featuredName: {
    color: "#ddd",
    fontSize: 14,
    marginTop: 5,
  },
  leaderboardContainer: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 12,
  },
  leaderboardItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  barContainer: {
    flex: 1,
    backgroundColor: "#ddd",
    borderRadius: 8,
    height: 10,
    overflow: "hidden",
    marginLeft: 10,
  },
  bar: {
    height: 10,
    backgroundColor: "#8A2BE2",
  },
  scoreText: {
    color: "#ddd",
    marginLeft: 5,
    fontSize: 12,
  },
});

export default Index;
