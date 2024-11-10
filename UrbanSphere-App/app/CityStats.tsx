import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type Factor = {
  id: string;
  name: string;
  rating: number;
};

const factors: Factor[] = [
  { id: '1', name: 'Cleanliness', rating: 4 },
  { id: '2', name: 'Air Quality', rating: 3 },
  { id: '3', name: 'Social Community', rating: 5 },
  { id: '4', name: 'Hospitals', rating: 4 },
  { id: '5', name: 'Parks', rating: 5 },
];

const CityStats: React.FC = () => {
  const renderStarRating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          name={i <= rating ? 'star' : 'star-o'}
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
        source={{ uri: 'https://example.com/city-image.jpg' }} // Replace with your image URL
        style={styles.headerImage}
        resizeMode="cover"
      />

      {/* Locality Title */}
      <Text style={styles.localityTitle}>Downtown City</Text>

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
    backgroundColor: '#F9F9F9',
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  localityTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  factorsList: {
    paddingHorizontal: 20,
  },
  factorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  factorName: {
    fontSize: 18,
    color: '#555',
  },
  starContainer: {
    flexDirection: 'row',
  },
});
