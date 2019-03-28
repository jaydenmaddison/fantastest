import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row'
  },
  textContainer: {
  },
  text: {
    color: '#25274D',
    fontSize: 20
  },
  minute: {
    color: '#25274D',
    fontSize: 20,
    marginRight: 20,
    fontWeight: 'bold'
  }
});


export default MomentItem = ({title, minute, index, id, keyMoment, scrollToIndex}) => {
  if(keyMoment) {
    return (
      <TouchableOpacity onPress={() => scrollToIndex(index)}>
        <View style={styles.container}>
          <View style={styles.minuteContainer}>
            <Text style={styles.minute}>
              {minute}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return null
}
