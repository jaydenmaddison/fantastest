import * as React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import CommentaryItem from './CommentaryItem';
import MomentsList from './MomentsList';
import graphqlTag from 'graphql-tag';
import { Query } from 'react-apollo';

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

  public handlePress(id) {
    //console.error(id);
      this.flatListRef.scrollToIndex({animated: true, index: id});
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
              <MomentsList scrollToIndex={this.handlePress.bind(this)} />
            </View>
          );
        }}
      </QueryCommentaries>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex:1
  },
  flatList: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#FFF'
  }
});
