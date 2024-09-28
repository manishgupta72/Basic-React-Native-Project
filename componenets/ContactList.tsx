import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contactList = [
    {
      uid: 1,
      name: 'Manish Gupta',
      status: 'Software Engineer',
      imageUrl:
        'https://img.freepik.com/free-photo/3d-representation-hindu-deity-krishna_23-2151200099.jpg',
      icon: '📞',
    },
    {
      uid: 2,
      name: 'Amit Gupta',
      status: ' Engineer',
      imageUrl:
        'https://img.freepik.com/free-photo/3d-representation-hindu-deity-krishna_23-2151200099.jpg',
      icon: '📞',
    },
    {
      uid: 3,
      name: 'Sumit Gupta',
      status: 'Designer',
      imageUrl:
        'https://img.freepik.com/free-photo/3d-representation-hindu-deity-krishna_23-2151200099.jpg',
      icon: '📞',
    },
    {
      uid: 4,
      name: 'Sumit Gupta',
      status: 'Developer',
      imageUrl:
        'https://img.freepik.com/free-photo/3d-representation-hindu-deity-krishna_23-2151200099.jpg',
      icon: '📞',
    },
    {
      uid: 5,
      name: 'Ganesh Gupta',
      status: 'Video Editor',
      imageUrl:
        'https://img.freepik.com/free-photo/3d-representation-hindu-deity-krishna_23-2151200099.jpg',
      icon: '📞',
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>ContactList</Text>
      <View>
        {contactList.map(({uid, imageUrl, name, status, icon}) => {
          return (
            <View key={uid} style={styles.userCard}>
              <Image source={{uri: imageUrl}} style={styles.userImage} />
              <View style={styles.userBody}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
              </View>
              <Text style={styles.userIcon}>{icon}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#ecf8f8',
    padding: 10,
    margin: 12,
    borderRadius: 6,
    elevation: 2,
  },

  headingText: {
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  userCard: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#edede9',
    margin: 4,
    borderRadius: 10,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    marginHorizontal: 12,
    marginVertical: 10,
  },
  userBody: {
    flex: 1,
    marginVertical: 10,
  },
  userName: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
  userStatus: {
    fontWeight: '500',
  },
  userIcon: {
    height: 30,
    width: 30,
  },
});
