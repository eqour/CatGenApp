import React, {useState} from 'react';
import {
  Image,
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
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

  enum LoadingState {
    LOADING,
    LOADED,
  }

  const [loadingState, setLoadingState] = useState(LoadingState.LOADING);

  const imageLoadingItem = () => {
    if (loadingState === LoadingState.LOADING) {
      return <ActivityIndicator size="large" />;
    } else {
      return <View />;
    }
  };

  const generateButtonPressHandler = () => {
    setLoadingState(LoadingState.LOADING);
    setCatData(generateNewCatData());
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={
            loadingState === LoadingState.LOADING
              ? styles.loadingImage
              : styles.image
          }
          source={{
            uri: 'https://cataas.com/cat?' + catData.imageId,
            cache: 'force-cache',
          }}
          onLoad={() => setLoadingState(LoadingState.LOADED)}
        />
        {imageLoadingItem()}
      </View>
      <Text style={styles.message}>{catData.message}</Text>
      <TouchableOpacity
        style={styles.generateButton}
        onPress={generateButtonPressHandler}>
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
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    opacity: 1,
  },
  loadingImage: {
    opacity: 0,
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
