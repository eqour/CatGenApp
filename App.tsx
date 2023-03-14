import React, {useState} from 'react';
import {
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import generateMessage from './src/script/MessageGenerator';

function App(): JSX.Element {
  const generateImageId = () => {
    return Math.floor(Math.random() * 5000) + 1;
  };

  const generateNewCatData = () => {
    return {
      imageId: generateImageId(),
      message: generateMessage(),
    };
  };

  const [catData, setCatData] = useState(generateNewCatData());

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://cataas.com/cat?' + catData.imageId,
        }}
      />
      <Text style={styles.message}>{catData.message}</Text>
      <TouchableOpacity
        style={styles.generateButton}
        onPress={() => setCatData(generateNewCatData())}>
        <Text style={styles.generateButtonText}>Сгенерировать!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  message: {
    marginTop: 48,
    textAlign: 'center',
    fontSize: 22,
    backgroundColor: 'lightskyblue',
    borderRadius: 12,
    padding: 10,
    fontStyle: 'italic',
  },
  generateButton: {
    marginTop: 24,
    padding: 10,
    backgroundColor: '#FFBD33',
    borderRadius: 12,
  },
  generateButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
