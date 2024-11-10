import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRoute } from "@react-navigation/native";

type Factor = {
  id: string;
  name: string;
  rating: number;
};

const factors: Factor[] = [
  { id: "1", name: "Cleanliness", rating: 4 },
  { id: "2", name: "Air Quality", rating: 3 },
  { id: "3", name: "Social Community", rating: 5 },
  { id: "4", name: "Hospitals", rating: 4 },
  { id: "5", name: "Parks", rating: 5 },
];

const CityStats: React.FC = () => {
  const route = useRoute();
  const { localityName } = route.params as { localityName: string };

  const renderStarRating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          name={i <= rating ? "star" : "star-o"}
          size={20}
          color="#FFD700"
          style={{ marginRight: 5 }}
        />
      );
    }
    return <View style={styles.starContainer}>{stars}</View>;
  };

  const renderFactor = ({ item }: { item: Factor }) => (
    <View style={styles.factorContainer}>
      <Text style={styles.factorName}>{item.name}</Text>
      {renderStarRating(item.rating)}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Image */}
      <Image
        source={{ uri: "https://example.com/city-image.jpg" }} // Replace with your image URL
        style={styles.headerImage}
        resizeMode="cover"
      />

      {/* Dynamic Locality Title */}
      <Text style={styles.localityTitle}>{localityName}</Text>

      {/* List of Factors */}
      <FlatList
        data={factors}
        keyExtractor={(item) => item.id}
        renderItem={renderFactor}
        contentContainerStyle={styles.factorsList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CityStats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1B20",
  },
  headerImage: {
    width: "100%",
    height: 200,
  },
  localityTitle: {
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 20,
    color: "#fff",
  },
  factorsList: {
    paddingHorizontal: 20,
  },
  factorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  factorName: {
    fontSize: 18,
    color: "#999",
  },
  starContainer: {
    flexDirection: "row",
  },
});
