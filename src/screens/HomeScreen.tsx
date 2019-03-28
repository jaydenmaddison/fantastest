import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CommentaryList from '../components/CommentaryList.tsx';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25274D',
    flex: 1,
  },
});

const HomeScreen = () => (
  <View style={styles.container}>
        <CommentaryList />
  </View>
);

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
