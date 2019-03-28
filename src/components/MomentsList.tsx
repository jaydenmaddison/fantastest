import * as React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import graphqlTag from 'graphql-tag';
import { Query } from 'react-apollo';
import { Ionicons } from '@expo/vector-icons';
import posed from 'react-native-pose';
import MomentItem from './MomentItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E9CCA',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
  },
  title: {
    color: '#25274D',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  chevron: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
});

const QUERY_COMMENTARIES = graphqlTag`
query queryCommentaries {
  commentaries {
    id
    title
    minute
    keyMoment
  }
}
`;

interface Data {
  commentaries: {
    title: string;
    id: number;
    minute: number;
    keyMoment: boolean;
  }[];
}

interface States {
  open: boolean;
}

class QueryMoments extends Query<Data> {}

const Drawer = posed.View({
  open: { y: 0 },
  closed: { y: 220 },
});

export default class MomentsList extends React.Component<States> {
  public state = {
    open: false,
  };

  private toggleMoments() {
    const { open } = this.state;
    if (open) {
      this.setState({ open: false });
    } else {
      this.setState({ open: true });
    }
  }

  public render() {
    return (
      <QueryMoments query={QUERY_COMMENTARIES}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error:{error}</Text>;
          if (!data) return <Text>No Data</Text>;
          const { open } = this.state;
          const { scrollToIndex } = this.props;
          return (
            <Drawer pose={open ? 'open' : 'closed'} style={open ? { marginTop: 300 } : { marginTop: 80 }}>
              <View style={styles.container}>
                <TouchableOpacity onPress={() => this.toggleMoments()}>
                  <Text style={styles.title}>
                    Key moments
                  </Text>
                  <View style={styles.chevron}>
                    {open && <Ionicons name="ios-arrow-down" size={32} color="#25274D" />}
                    {!open && <Ionicons name="ios-arrow-up" size={32} color="#25274D" />}
                  </View>
                </TouchableOpacity>
                <FlatList
                  data={data.commentaries}
                  keyExtractor={item => String(item.id)}
                  renderItem={({ item, index }) => (
                    <MomentItem
                      {...item}
                      index={index}
                      scrollToIndex={scrollToIndex}
                    />
                  )}
                />
              </View>
            </Drawer>
          );
        }}
      </QueryMoments>
    );
  }
}
