import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

// Get screen width for responsiveness
const screenWidth = Dimensions.get('window').width;

const FoodCard = ({id, img, name, price, rating, desc}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{uri: img}} style={styles.image} resizeMode="contain" />
        <View style={styles.infoContainer}>
          <Text style={styles.foodName}>{name.slice(0, 18)}..</Text>
          <Text style={styles.price}>₹{price}</Text>
        </View>
        <Text style={styles.description}>{desc.slice(0, 50)}...</Text>
        <View style={styles.footer}>
          <View style={styles.ratingContainer}>
            <Text>{rating}</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Occupy full space
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#f5f5f5', // Optional: background color
  },
  card: {
    flex: 1,
    width: screenWidth * 0.8, // 80% of the screen width for responsiveness
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 8,
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foodName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  price: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 14,
  },
  description: {
    fontSize: 12,
    color: '#777',
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default FoodCard;
