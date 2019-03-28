import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25274D',
    flex: 1,
  },
  minuteContainer: {
    backgroundColor: '#2E9CCA',
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 99,
  },
  minute: {
    color: '#25274D',
    fontWeight: 'bold'
  },
  textContainer: {
    paddingLeft: 20,
    borderLeftWidth: 3,
    borderColor: '#464866',
    paddingBottom: 40,
    paddingLeft: 40,
    marginHorizontal: 20
  },
  text: {
    color: '#FFF',
  }
});

export default CommentaryItem = ({text, minute}) => (
  <View style={styles.container}>
    <View style={styles.minuteContainer}>
      <Text style={styles.minute}>
        {minute}
      </Text>
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  </View>
)
