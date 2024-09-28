import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/515855602/photo/kedarnath-in-india.jpg?s=612x612&w=0&k=20&c=_KmnQbbvqRftKusDTU_JUjVM3V80Mo2jBqaCNx948us=',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Kedarnath Temple</Text>
          <Text style={styles.cardLabel}>Dev Bhoomi, Kedarnath</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
            blanditiis aspernatur optio dignissimos enim!
          </Text>
          <Text style={[styles.cardFooter, styles.link]}>12 min later...</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  headingText: {
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    borderRadius: 8,
    margin: 8,
    padding: 8,
    backgroundColor: '#fff',
  },
  cardElevated: {
    elevation: 2,
  },
  cardImage: {
    height: 200,
    borderRadius: 4,
  },

  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 22,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 12,
    color: '#000000',
    flexShrink: 1,
    marginBottom: 12,
  },
  cardFooter: {
    fontSize: 14,
    marginBottom: 6,
  },
  link: {
    color: 'blue',
  },
});
