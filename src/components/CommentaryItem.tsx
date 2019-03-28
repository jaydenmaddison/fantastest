/* eslint react/prop-types: 0 */
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
    fontWeight: 'bold',
  },
  textContainer: {
    borderLeftWidth: 3,
    borderColor: '#464866',
    paddingBottom: 40,
    paddingLeft: 40,
    marginHorizontal: 20,
  },
  text: {
    color: '#FFF',
  },
  lastChild: {
    borderLeftWidth: 0,
  },
});

interface CommentaryProps {
  text: string;
  minute: number;
  dataLength: array;
  index: number;
}

const CommentaryItem: React.SFC<CommentaryProps> = ({
  text,
  minute,
  dataLength,
  index,
}) => (
  <View style={styles.container}>
    <View style={styles.minuteContainer}>
      <Text style={styles.minute}>
        {minute}
      </Text>
    </View>
    <View style={[styles.textContainer, index === dataLength - 1 && styles.lastChild]}>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  </View>
);

export default CommentaryItem;
