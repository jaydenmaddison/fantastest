import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CommentaryList from '../components/CommentaryList.tsx';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

const HomeScreen = () => (
  <View style={styles.container}>
        <Text>Home Screen</Text>
        <CommentaryList />
  </View>
);

HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;
