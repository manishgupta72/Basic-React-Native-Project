import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import FoodData from '../data/FoodData';
import FoodCard from './FoodCard';

const FoodItem = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={FoodData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <FoodCard
            id={item.id}
            name={item.name}
            img={item.img}
            rating={item.rating}
            price={item.price}
            desc={item.desc}
          />
        )}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listContainer: {
    justifyContent: 'center',
    gap: 10,
  },
});

export default FoodItem;
