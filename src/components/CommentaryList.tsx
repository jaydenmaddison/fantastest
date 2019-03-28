import * as React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import graphqlTag from 'graphql-tag';
import { Query } from 'react-apollo';
import CommentaryItem from './CommentaryItem';
import MomentsList from './MomentsList';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
  },
  flatList: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#FFF',
  },
});

const QUERY_COMMENTARIES = graphqlTag`
query queryCommentaries {
  commentaries {
    id
    text
    minute
  }
}
`;

interface Data {
  commentaries: {
    text: string;
    id: number;
    minute: number;
  }[];
}

class QueryCommentaries extends Query<Data> {}

export default class CommentaryList extends React.Component<Props, States> {
  public constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  private handlePress(i) {
    this.flatListRef.scrollToIndex({ animated: true, index: i });
  }

  public render() {
    return (
      <QueryCommentaries query={QUERY_COMMENTARIES}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error:{error}</Text>;
          if (!data) return <Text>No Data</Text>;
          return (
            <View style={styles.container}>
              <Text style={styles.title}>
                Live commentary
              </Text>
              <FlatList
                data={data.commentaries}
                ref={(ref) => { this.flatListRef = ref; }}
                keyExtractor={item => String(item.id)}
                style={styles.flatList}
                renderItem={({ item }) => <CommentaryItem {...item} />}
              />
              <MomentsList scrollToIndex={this.handlePress} />
            </View>
          );
        }}
      </QueryCommentaries>
    );
  }
}
