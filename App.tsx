import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './componenets/FlatCards';
import ElevatedCard from './componenets/ElevatedCard';
import FancyCard from './componenets/FancyCard';
import BlogCard from './componenets/BlogCard';
import ContactList from './componenets/ContactList';
import PasswordGenerator from './componenets/PasswordGenerator';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <FlatCards />
        <ElevatedCard />
        <FancyCard />
        <ContactList />
        <BlogCard /> */}
        <PasswordGenerator />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
