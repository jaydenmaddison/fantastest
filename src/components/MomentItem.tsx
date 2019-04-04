/* eslint react/prop-types: 0 */
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    color: '#25274D',
    fontSize: 20,
  },
  minute: {
    color: '#25274D',
    fontSize: 20,
    marginRight: 20,
    fontWeight: 'bold',
  },
});

interface MomentProps {
  title: string;
  minute: number;
  index: number;
  keyMoment: boolean;
  scrollToIndex: any;
}

const MomentItem: React.SFC<MomentProps> = ({
  title,
  minute,
  index,
  keyMoment,
  scrollToIndex,
}) => {
  if (keyMoment) {
    return (
      <TouchableOpacity onPress={() => scrollToIndex(index)}>
        <View style={styles.container}>
          <View>
            <Text style={styles.minute}>
              {minute}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>
              {title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return null;
};

export default MomentItem;
