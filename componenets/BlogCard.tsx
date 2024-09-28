import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function BlogCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>BlogCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Text style={styles.blogTitle}>
          What is the Kedarnath Temple famous for?
        </Text>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/530814852/photo/kedarnath-in-india.jpg?s=612x612&w=0&k=20&c=WlUdHmPcLSDLfFgvV8YaymG43SwUkleagJlEUse9TLU=',
          }}
          style={styles.cardImage}
        />
        <View style={styles.blogBody}>
          <Text style={styles.blogDescription}>
            Browse 350+ kedarnath temple stock photos and images available, or
            start a new search to explore more stock photos and image..
          </Text>
        </View>
        <View style={styles.blogFooter}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.istockphoto.com/photos/kedarnath-temple')
            }>
            <Text style={styles.link}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://htmlcolorcodes.com/color-names/')
            }>
            <Text style={styles.link}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
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
  blogTitle: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  blogBody: {
    padding: 10,
    elevation: 4,
  },
  blogDescription: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 10,
  },
  blogFooter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 14,
  },
  link: {
    backgroundColor: 'black',

    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
});
