import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './componenets/FlatCards';
import ElevatedCard from './componenets/ElevatedCard';
import FancyCard from './componenets/FancyCard';
import BlogCard from './componenets/BlogCard';
import ContactList from './componenets/ContactList';
import PasswordGenerator from './componenets/PasswordGenerator';
import Pizza from './componenets/Pizza';
import BackgroundColorChanger from './componenets/BackgroundColorChanger';

const App = () => {
  return (
    <>
      <>
        {/* <FlatCards />
        <ElevatedCard />
        <FancyCard />
        <ContactList />
        <BlogCard /> */}
        {/* <PasswordGenerator /> */}
        {/* <Pizza /> */}
        <BackgroundColorChanger />
      </>
    </>
  );
};

export default App;
