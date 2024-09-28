import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const color = [
    'blue',
    'black',
    'lime',
    'red',
    'purple',
    'green',
    'blue',
    'skyblue',
    'lime',
    'red',
  ];
  const images = [
    'https://t4.ftcdn.net/jpg/07/91/26/45/360_F_791264560_pq9SLX0oJs9dDx5ROFUu1MYDxKmgMf75.jpg',
    'https://t4.ftcdn.net/jpg/07/91/26/45/360_F_791264560_pq9SLX0oJs9dDx5ROFUu1MYDxKmgMf75.jpg',
    'https://t4.ftcdn.net/jpg/07/91/26/45/360_F_791264560_pq9SLX0oJs9dDx5ROFUu1MYDxKmgMf75.jpg',
    'https://t4.ftcdn.net/jpg/07/91/26/45/360_F_791264560_pq9SLX0oJs9dDx5ROFUu1MYDxKmgMf75.jpg',
    'https://t4.ftcdn.net/jpg/07/91/26/45/360_F_791264560_pq9SLX0oJs9dDx5ROFUu1MYDxKmgMf75.jpg',
    'https://t4.ftcdn.net/jpg/07/91/26/45/360_F_791264560_pq9SLX0oJs9dDx5ROFUu1MYDxKmgMf75.jpg',
    'https://t4.ftcdn.net/jpg/07/91/26/45/360_F_791264560_pq9SLX0oJs9dDx5ROFUu1MYDxKmgMf75.jpg',
    'https://t4.ftcdn.net/jpg/07/91/26/45/360_F_791264560_pq9SLX0oJs9dDx5ROFUu1MYDxKmgMf75.jpg',
    'https://t4.ftcdn.net/jpg/07/91/26/45/360_F_791264560_pq9SLX0oJs9dDx5ROFUu1MYDxKmgMf75.jpg',
    'https://t4.ftcdn.net/jpg/07/91/26/45/360_F_791264560_pq9SLX0oJs9dDx5ROFUu1MYDxKmgMf75.jpg',
    'https://t4.ftcdn.net/jpg/07/91/26/45/360_F_791264560_pq9SLX0oJs9dDx5ROFUu1MYDxKmgMf75.jpg',
  ];

  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        {count.map((index, c) => {
          return (
            <View
              key={index}
              style={[
                styles.card,
                styles.cardElevated,
                {backgroundColor: color[c]},
              ]}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: images[index],
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={[styles.textColor, styles.textOnImage]}>
                Radha G
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    margin: 8,
    padding: 8,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 4,
  },
  imageContainer: {
    position: 'relative',
  },
  textOnImage: {
    position: 'absolute',
    bottom: 0,
  },
  textColor: {
    color: '#c44536',
    backgroundColor: '#edddd4',
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 2,
    borderRadius: 4,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 6,
    margin: 8,
    // Static shadow and color effect
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // for Android shadow
  },
  cardElevated: {
    elevation: 8,
  },
  cardText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
