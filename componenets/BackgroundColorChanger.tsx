import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

export default function BackgroundColorChanger() {
  const [randomBackground, setRandomBackground] = useState('#fff');
  const [statusBackground, setStatusBackground] = useState('#fff');
  const [circleBackground, setCircleBackground] = useState('#fff');
  const [squarebackground, setSquareBackground] = useState('#fff');
  const [reactangleBackground, setReactangleBackground] = useState('#fff');
  const [trianglebackground, setTriangleBackground] = useState('#fff');
  const [diamondBackground, setDiamondBackground] = useState('#fff');
  const [coneBackground, setConeBackground] = useState('#fff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    let Statuscolor = '#';
    let circleColor = '#';
    let squareColor = '#';
    let rectangleColor = '#';
    let triangleColor = '#';
    let diamondColor = '#';
    let coneColor = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
      Statuscolor += hexRange[Math.floor(Math.random() * 16)];
      circleColor += hexRange[Math.floor(Math.random() * 16)];
      squareColor += hexRange[Math.floor(Math.random() * 16)];
      rectangleColor += hexRange[Math.floor(Math.random() * 16)];
      triangleColor += hexRange[Math.floor(Math.random() * 16)];
      diamondColor += hexRange[Math.floor(Math.random() * 16)];
      coneColor += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
    setCircleBackground(circleColor);
    setSquareBackground(squareColor);
    setReactangleBackground(rectangleColor);
    setTriangleBackground(triangleColor);
    setDiamondBackground(diamondColor);
    setStatusBackground(Statuscolor);
    setConeBackground(coneColor);
  };

  return (
    <>
      <StatusBar backgroundColor={statusBackground} />

      <ScrollView>
        <View style={[styles.container, {backgroundColor: randomBackground}]}>
          <View style={styles.shapeContainer}>
            <View style={[styles.cirlce, {backgroundColor: circleBackground}]}>
              <Text style={styles.shapeText}>Circle</Text>
            </View>
            <View style={[styles.square, {backgroundColor: squarebackground}]}>
              <Text style={styles.shapeText}>Square</Text>
            </View>
          </View>
          <TouchableOpacity onPress={generateColor}>
            <View style={styles.actionBtn}>
              <Text style={styles.actionBtnTxt}>Press me</Text>
            </View>
          </TouchableOpacity>
          <View style={(styles.shapeContainer, styles.LowershapeContainer)}>
            <View
              style={[
                styles.rectangle,
                {backgroundColor: reactangleBackground},
              ]}>
              <Text style={styles.shapeText}>Rectangle</Text>
            </View>
            <View
              style={[
                styles.triangle,
                {borderBottomColor: trianglebackground},
              ]}>
              <Text style={styles.shapeText}>Triangle</Text>
            </View>
          </View>
          <View style={(styles.shapeContainer, styles.LowershapeContainer)}>
            <View
              style={[
                styles.diamond,
                styles.diamondInner,
                {backgroundColor: diamondBackground},
              ]}>
              <Text style={styles.shapeText}>Diamond</Text>
            </View>
            <View
              style={[
                styles.star,
                styles.starContainer,
                styles.starAfter,
                styles.starBefore,
                {borderBottomColor: coneBackground},
              ]}>
              <Text style={styles.shapeText}>Star</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the entire screen
    justifyContent: 'center', // Vertically center
    alignItems: 'center', // Horizontally center
    padding: 20,
  },

  actionBtn: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: '#4834DF',
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#FFF',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  shapeContainer: {
    marginBottom: 100,
    flexDirection: 'row',
    gap: 10,
  },
  LowershapeContainer: {
    marginTop: 100,
    gap: 10,
  },
  cirlce: {
    width: 150,
    height: 150,
    borderRadius: 200 / 2,
    backgroundColor: 'red',
  },
  square: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: 'lime',
  },
  rectangle: {
    width: 250,
    height: 150,
    borderRadius: 10,
    backgroundColor: 'lime',
  },

  shapeText: {
    textAlign: 'center',
    fontSize: 20,
    margin: 'auto',
    color: '#fff', // Change this color as needed
    fontWeight: 'bold',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 50, // Adjust width for the left side
    borderRightWidth: 50, // Adjust width for the right side
    borderBottomWidth: 100, // Adjust height for the triangle
    borderLeftColor: 'transparent', // Make left border transparent
    borderRightColor: 'transparent', // Make right border transparent

    position: 'relative',
    alignItems: 'center',
  },
  diamond: {
    width: 200,
    height: 200,
    backgroundColor: 'transparent',
    position: 'relative',
    transform: [{rotate: '45deg'}],
    marginBottom: 50,
  },
  diamondInner: {
    width: 200,
    height: 200,
    backgroundColor: 'transparent',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    position: 'relative',
    top: 0,
    left: 0,
    transform: [{rotate: '45deg'}],
  },
  starContainer: {
    marginVertical: 50,
    position: 'relative',
    alignItems: 'center', // Centering the star
  },
  star: {
    width: 0,
    height: 0,
    borderRightWidth: 100,
    borderBottomWidth: 70,
    borderLeftWidth: 100,
    borderRightColor: 'transparent',

    borderLeftColor: 'transparent',
    transform: [{rotate: '35deg'}],
  },
  starBefore: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 80,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',

    top: -45,
    left: -65,
    transform: [{rotate: '-35deg'}],
  },
  starAfter: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderRightWidth: 100,
    borderBottomWidth: 70,
    borderLeftWidth: 100,
    borderRightColor: 'transparent',

    borderLeftColor: 'transparent',
    top: 3,
    left: -105,
    transform: [{rotate: '-70deg'}],
  },
});
