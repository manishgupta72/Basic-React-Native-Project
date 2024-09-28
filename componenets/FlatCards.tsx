import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://t3.ftcdn.net/jpg/05/15/63/82/360_F_515638234_Leo0UBEay0ozXWnObkkxLRNJXM9xhdWG.jpg',
              }}
              style={styles.image}
            />
          </View>
          <Text style={[styles.textColor, styles.textOnImage]}>Krishna G</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://t3.ftcdn.net/jpg/05/15/63/82/360_F_515638234_Leo0UBEay0ozXWnObkkxLRNJXM9xhdWG.jpg',
              }}
              style={styles.image}
            />
          </View>
          <Text style={[styles.textColor, styles.textOnImage]}>Radha G</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://t3.ftcdn.net/jpg/05/15/63/82/360_F_515638234_Leo0UBEay0ozXWnObkkxLRNJXM9xhdWG.jpg',
              }}
              style={styles.image}
            />
          </View>
          <Text style={[styles.textColor, styles.textOnImage]}>Radha G</Text>
        </View>
      </View>
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
    flex: 1,
    flexDirection: 'row',
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
    borderRadius: 4,
    margin: 8,
    backgroundColor: 'black',
  },
  cardOne: {
    backgroundColor: 'red',
    color: 'white',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'lime',
  },
});
